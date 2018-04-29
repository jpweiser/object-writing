import React, {Component} from 'react';
import superagent from 'superagent';
import Timer from '../timer/Timer';
import FileSaver from 'file-saver';
import {Form, TextArea, Button, Header, Loader} from 'semantic-ui-react';
import './Form.css';

const RandomObject = (obj, h='h1') => {
  return (<Header as={h}>Object: {obj}</Header>);
}



class WritingForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: props.duration,
      isRunning: true,
      entry: '',
      object: '',
      objectLoading: true,
      objectReadingTime:false,
    }
  }

  componentWillMount() {
    superagent.get('object/').end((err, res) => {
      let obj = res.text
      if (err) {
        obj = 'book'
      }
      this.setState({
        object: obj,
        objectLoading: false,
        objectReadingTime: true
      })
    })
  }

  WritingArea = () => {
    return (
      <div>
      <Header sub>Time Remaining: {this._timer()}</Header>
        <Form>
          <TextArea autoHeight disabled={!this.state.isRunning} style={{ minHeight: 300 }} placeholder='Type here' onChange={this.handleChange} id='ta'/>
        </Form>
        {this.state.isRunning && <Button onClick={this.handleClear}>Clear</Button>}
        {!this.state.isRunning && <Button secondary onClick={this.handleDownload}>Download</Button>}
        <Button onClick={this.handleReset}>Reset</Button>

      </div>
    )
  }

  handleDownload = () => {
    let contents = this.state.object + ' - ' + this.props.duration + '\n\n' + this.state.entry;
    let file = new Blob([contents], {type: 'text/plain'});
    FileSaver.saveAs(file, this.state.object + '.txt');
  }

  submit = () => {
    this.setState({isRunning: false})
  }

  _timer = (duration=this.state.duration, complete=this.submit, format=true) => {
    if (this.state.isRunning) {
      return <Timer duration={duration} complete={complete} format={format}/>
    }

    return 'Times Up, dude'
  }

  handleClear = () => {
    document.getElementById('ta').value = ''
    this.setState({
      entry: ''
    })
  }

  handleReset = () => {
    this.props.reset();
  }

  handleChange = (e, {value}) => {
    this.setState({
      entry: value
    })
  }

  goTime = () => {
    this.setState({
      objectReadingTime: false
    })
  }

  render() {
    if (this.state.objectLoading) {
      return <Loader />
    }

    if (this.state.objectReadingTime) {
      return (
        <div>
          {RandomObject(this.state.object)}
          <Header as='h2'>Get ready... {this._timer(3, this.goTime, false)}</Header>
        </div>
      )

    }
    return (<div className='writer'>
      {RandomObject(this.state.object, 'h2')}
      {this.WritingArea() }
    </div>)
  }
}

export default WritingForm;
