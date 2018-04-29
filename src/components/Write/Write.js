import React, {Component} from 'react';
import {Dropdown, Icon, Button, Header} from 'semantic-ui-react';
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
        text: '1 minute',
        value: 60
      }, {
        text: '5 minutes',
        value: 60 * 5
      }, {
        text: '10 minutes',
        value: 60*10
      }
    ]
  }

  handleClick = () => {
    this.setState({filling: false})
  }

  handleReset = () => {
    this.setState({filling: true})
  }

  handleChange = (e, {value}) => {
    this.setState({duration: value});
  }

  render() {
    if (this.state.filling) {
      return (<div>
        <Header>Instructions</Header>
        <p>Select a duration from the drop-down menu below, then hit 'Go.'</p>
        <p>You will be presented with a random object, and given three seconds to read
        what the object is before the exercise begins.</p>
        <p>When the selected duration has lapsed, the writing area will be disabled.
        Hit 'Clear' to completely deleta all of the writing for that particular exercise.
        This cannot be undone. The timer will continue. Hit 'Reset' to do another exercise.</p>
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
