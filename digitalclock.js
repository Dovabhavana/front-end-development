import React, { Component } from "react";
class clock extends Component {
  constructor() {
    super();
    this.state = { time: new DataTransfer() };
  }
  componentDidMount() {
    this.update = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1 * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.update);
  }
  render() {
    const { time } = this.state;
    return (
      <div>
        <h1>digital clock</h1>
        <h2>{time.toLocaleTimeString()}</h2>
      </div>
    );
  }
}
export default clock;

