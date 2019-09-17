import React, { Component } from "react";
import firebase from "../firebase";

export default class MessageRead extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: ""
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref("/users")
      .once("value")
      .then(snapshot => {
        const users = snapshot.val();
        this.setState({
          users
        });
      });
  }

  render() {
    const search = document.getElementById("usersearch");
    const match = document.getElementById("match");
    const users = this.state.users;

    const searchUsernames = async searchText => {
      return this.state.users;
    };
    console.log(users.username);

    // search.addEventListener('input', searchUsernames(search.value))

    const user = this.state.users.user;
    const username = this.state.username;
    let matches = user.filter(state => {
      const regex = new RegExp(`^${username}`, "gi");
      return (
        this.state.username.math(regex) || this.state.username.match(regex)
      );
    });
    if (username.length === 0) {
      matches = [];
    }

    outputHTML(matches);

    const outputHTML = matches => {
      if (matches.length > 0) {
        const html = matches.map(match => `{match.username}`);
      }
    };
    return (
      <div className="message__read">
        To:
        <input
          id="userSearch"
          onChange={e => this.setState({ username: e.target.value })}
          type="text"
          placeholder="type username"
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
        <div id="match" />
      </div>
    );
  }
}
