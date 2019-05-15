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
      <button className="board__stalk">
        {this.props.title} {this.state.count}
      </button>
      
    );
  }
}
