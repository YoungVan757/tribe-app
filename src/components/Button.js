import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCounter() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <button className="button" onClick={() => this.incrementCounter()}>
        {this.props.title} {this.state.count}
      </button>
    );
  }
}
