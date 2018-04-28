import React, {Component} from 'react';
import {Dropdown, Icon, Button} from 'semantic-ui-react';
import WritingForm from '../form/Form';

class Write extends Component {
  constructor() {
    super()
    this.state = {
      random: true,
      duration: 30,
      filling: true
    }
  }

  componentWillMount() {
    this.durationOptions = [
      {
        text: '30 seconds',
        value: 30
      }, {
        text: '5 minutes',
        value: 60 * 5
      }
    ]
  }

  handleClick = () => {
    this.setState({filling: false})
  }

  handleReset = () => {
    this.setState({
      filling: true
    })
  }

  render() {
    if (this.state.filling) {
      return (<div>
        <p>Instruction...</p>
        <Icon name='time'/>
        <Dropdown button placeholder='Select Duration:' search selection options={this.durationOptions} onChange={this.handleChange}/>
        <Button onClick={this.handleClick}>Go</Button>
      </div>)
    } else {
      return (<WritingForm duration={this.state.duration} reset={this.handleReset}/>)
    }

  }
}
  export default Write
