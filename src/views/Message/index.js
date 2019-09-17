import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { WithAuth } from "../../contexts/AuthContext";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: "",
      users: [],
      user: "",
      message: "",
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

  sendMessage() {
    const database = firebase.database();
    const uniqueId = Date.now();
    const uid = window.localStorage.getItem("tribe_uid");
    const users = this.state.users;
    const otheruser = this.state.uniqueId;

    const databaseUpdates = {};
    // SENDING MESSAGES..

    // 1. Who am i?
    // 2. Who am i sending a message to?
    // 3. What's the message?
    // 4. When am I sending it (date)?

    databaseUpdates[
      `/users/${uid}/messages/${uniqueId}/message`
    ] = this.state.message;
    databaseUpdates[`/users/${uid}/messages/${uniqueId}/sender/`] = uid;
    databaseUpdates[
      `/users/${otheruser.username}/messages/${uniqueId}/recipient/`
    ] = this.state.username;
    databaseUpdates[`/users/${uid}/messages/${uniqueId}/date/`] = Date.now();

    databaseUpdates[
      `/users/${users.username}/messages/${uniqueId}/message`
    ] = this.state.message;
    databaseUpdates[
      `/users/${users.username}/messages/${uniqueId}/sender/`
    ] = uid;
    databaseUpdates[
      `/users/${otheruser.username}/messages/${uniqueId}/recipient/`
    ] = this.state.username;
    databaseUpdates[
      `/users/${users.username}/messages/${uniqueId}/date/`
    ] = Date.now();

    database
      .ref()
      .update(databaseUpdates)
      .then(() => {
        this.fetchData();
      });
  }
  render() {
    const { user } = this.props.authContext;
    const search = document.getElementById('search');

    const searchUsers = async searchText => {
      const res = await fetch(this.state.users);
      const users = await res.fetch();

      let matches = users.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi')
        return users.username.match(regex);
      });
console.log(matches);

    };

    

    search.addEventListener('input', () => searchUsers(search.value))
    if (!user) return <Redirect to="/" />;
    return (
      <div className="container">
        <Link to="/messages" className="message__new">
          messages
        </Link>
        <div className="message__body">
          <div className="message__read">
            To:
            <input
              id="search"
              onChange={e => this.setState({ username: e.target.value })}
              type="text"
              placeholder="type username"
              className="board__comments"
            />
            <div id='match'></div>
          </div>
          <div className="message__textboxes">
            <div className="message__line" />
            <input
              onChange={e => this.setState({ message: e.target.value })}
              type="text"
              className="message__write"
              placeholder="type message"
            />
          </div>

          <div className="message__header">
            <div className="message__header--info">
              <br />
              <Link to="/messages">
                <button
                  onClick={() => this.sendMessage()}
                  className="message__header--button"
                >
                  <img
                    alt="Send Icon"
                    width="220"
                    height="220"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuth(Message);
