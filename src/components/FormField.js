import React, { Component } from 'react';

export default class FormField extends Component {
  render() {
    return (
      <div className="form-field">
        <label style={{ color: this.props.color }}>{this.props.title}</label>
        <input type={this.props.inputType} />
      </div>
    );
  }
}
