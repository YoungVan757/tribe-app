import React, { Component } from 'react';

export default class FormField extends Component {
  renderMyFriends() {
    if (this.props.myFriends) {
      const myFriendsList = Object.keys(this.props.myFriends).map(k => {
        return <h3>{this.props.myFriends[k]}</h3>;
      });

      return myFriendsList;
    }
  }

  render() {
    console.log(this.props.myFriends);

    return (
      <div className="form-field" style={{ borderColor: this.props.borderColor}}>
        <label style={{ color: this.props.color }}>{this.props.title}</label>
        <input type={this.props.inputType} />
      </div>
    );
  }
}
