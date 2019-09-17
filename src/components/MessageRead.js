import React, { Component } from "react";
import firebase from "../firebase";

import { WithAuth } from '../contexts/AuthContext'

 class MessageRead extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("YOO");
    console.log("all usrts", this.props.authContext.allUsers)
  }

  
  render() {
    return (
      <div className="message__read">
        To:
        <input
          onChange={e => this.setState({ username: e.target.value })}
          type="text"
          placeholder="type username!!s"
          className="board__comments"
        />
        <div className="message__textboxes">
          <div className="message__line" />
          <input
            onChange={e => this.setState({ message: e.target.value })}
            type="text"
            id="usersearch"
            className="message__write"
            placeholder="type"
          />
        </div>
        {/* <div id="match" /> */}
      </div>
    );
  }
}


export default WithAuth(MessageRead);