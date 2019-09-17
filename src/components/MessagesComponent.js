import React, { Component } from "react";
import Avatar from "../components/Avatar";
import firebase from "../firebase";
import { Link } from "react-router-dom";

export default class MessagesComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      users: "",
      user: "",
      uid: "",
      messages: []
    };
    this.renderMessage = this.renderMessage.bind(this);
    this.fetchData = this.fetchData.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem("tribe_uid");
    firebase
      .database()
      .ref(`/users/${uid}/messages`)
      .once("value")
      .then(snap => {
        const messages = snap.val();
        this.setState({
          messages
        });
      });
  }

  deleteMessage(messageId) {
    const updates = {};
    const uid = window.localStorage.getItem("tribe_uid");
    updates[`/users/${uid}/messages/${messageId}`] = null;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.fetchData();
      });
  }

  renderMessage() {
    const messages =
      this.state.messages &&
      Object.keys(this.state.messages).map(k => {
        const singleMessage = this.state.messages[k];
        console.log("SINGLE MESSAGE", singleMessage);
        return (
          <div className="members__row1">
            <div className="members__favs">
              <div class="messages__heading"> {singleMessage.message} </div>
            </div>
            <button onClick={() => this.deleteMessage(k)}>
              <img
                alt="delete icon"
                height="200px"
                margin="1%"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMyA2djE4aDE4di0xOGgtMTh6bTUgMTRjMCAuNTUyLS40NDggMS0xIDFzLTEtLjQ0OC0xLTF2LTEwYzAtLjU1Mi40NDgtMSAxLTFzMSAuNDQ4IDEgMXYxMHptNSAwYzAgLjU1Mi0uNDQ4IDEtMSAxcy0xLS40NDgtMS0xdi0xMGMwLS41NTIuNDQ4LTEgMS0xczEgLjQ0OCAxIDF2MTB6bTUgMGMwIC41NTItLjQ0OCAxLTEgMXMtMS0uNDQ4LTEtMXYtMTBjMC0uNTUyLjQ0OC0xIDEtMXMxIC40NDggMSAxdjEwem00LTE4djJoLTIwdi0yaDUuNzExYy45IDAgMS42MzEtMS4wOTkgMS42MzEtMmg1LjMxNWMwIC45MDEuNzMgMiAxLjYzMSAyaDUuNzEyeiIvPjwvc3ZnPg=="
              />
            </button>
            <Link to="/message" class="members__write1">
              <Avatar classN="user__img" />
            </Link>
          </div>
        );
      });
    return messages;
  }

  render() {
    return (
      <div className="members__body">
        {this.renderMessage()}
        <div className="members__line1" />
      </div>
    );
  }
}
