import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    return <input className="board__input" type="text" placeholder={this.props.placeholder} />;
  }
}
