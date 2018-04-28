import React, {Component} from 'react';
import Timer from '../timer/Timer';
import {Form, TextArea, Button} from 'semantic-ui-react';
import './Form.css';

class WritingForm extends Component {
  constructor() {
    super();
    this.state = {
      duration: 30,
      isRunning: true
    }
  }

  componentWillMount() {
    this.setState({object: 'cow'})
  }

  submit = () => {
    this.setState({isRunning: false})
  }

  _timer = () => {
    if (this.state.isRunning) {
      return <Timer duration={this.state.duration} complete={this.submit}/>
    }

    return 'Times Up, dude'
  }

  handleClear = () => {
    this.setState({
      entry: ''
    })
  }

  handleReset = () => {
    this.props.reset();
  }

  render() {
    return (<div className='writer'>
      <h1>Object: {this.state.object}</h1>
      <div>
        Time Remaining: {this._timer()}
        seconds
      </div>
      <div>

        <Form>
          <TextArea autoHeight disabled={!this.state.isRunning} placeholder='Type here'/>
          <Button onClick={this.handleClear}>Clear</Button><Button onClick={this.handleReset}>Reset</Button>
        </Form>

      </div>
    </div>)
  }
}

export default WritingForm;
