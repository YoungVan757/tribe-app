import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button className="board__stalk">{this.props.title}</button>;
  }
}
