import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button className="board__post">{this.props.title}</button>;
  }
}
