import React, { Component } from 'react';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <button className="button" style={{borderColor: this.props.borderColor, color: this.props.color}}>{this.props.title}</button>;
  }
}
