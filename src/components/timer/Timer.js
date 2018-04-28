import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.props.duration,
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        duration: this.state.duration - 1
      })
      if (this.state.duration === 0) {
        clearInterval(this.interval);
        this.complete();
      }
    }, 1000)
  }

  complete = () => {
    this.props.complete();
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    return (
      <h1>{this.state.duration}</h1>
    )
  }

}

export default Timer;
