import React, {Component} from 'react';
import './Timer.css';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: this.props.duration,
      format: true,
    }
  }

  formatTime = (duration) => {
    let minutes = Math.floor(duration / 60);
    let seconds = duration % 60;
    if (!this.props.format) {
      return minutes + ':' + ('0' + seconds).slice(-2);
    }
    return (minutes > 0 ? minutes + ' minutes ' : '') + seconds + ' seconds';
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
      <div>
        {this.formatTime(this.state.duration)}
      </div>
    )
  }

}

export default Timer;
