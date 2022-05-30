import React from "react";
import ReactDOM from "react-dom";
var interval;

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      hour: 0,
      minute: 0,
      second: 0,
      isStart: false,
    };
  }

  startInterval = () => {
    if (this.state.isStart === false) {
      this.setState({
        isStart: true,
      });
      interval = setInterval(() => {
        this.setState({
          second: this.state.second + 1,
        });
        if (this.state.second === 60) {
          this.setState({
            second: 0,
            minute: this.state.minute + 1,
          });
        }
        if (this.state.minute === 60) {
          this.setState({
            minute: 0,
            hour: this.state.hour + 1,
          });
        }
      }, 1000);
    }
  };

  stopInterval = () => {
    this.setState({
      isStart: false,
    });
    clearInterval(interval);
  };

  resetInterval = () => {};

  render() {
    return (
      <>
        <h2 className="timer">
          {"0" +
            this.state.hour +
            ":" +
            "0" +
            this.state.minute +
            ":" +
            "0" +
            this.state.second}
        </h2>
        <br></br>
        <br></br>
        <button onClick={this.props.handleSetTitle}>CLick to Change</button>
        <br></br>
        <div className="button_box">
          <button className={this.startInterval}>Start</button>
          <button className={this.stopInterval}>Stop</button>
          <button>Reset</button>
        </div>
      </>
    );
  }
}

export default Timer;
