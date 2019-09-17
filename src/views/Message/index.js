import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';
import { WithAuth } from '../../contexts/AuthContext';

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      otherUser: {}
    };
  }

  componentDidMount() {
    // this.fetchData();
  }

  fetchData() {

  }

  sendMessage() {

    const { user } = this.props.authContext;
    const { otherUser, message }  = this.state;

    const database = firebase.database();
    const uniqueId = Date.now();
    const databaseUpdates = {};


    const messageObj = {
      id: uniqueId,
      senderId: user.uid,
      senderUsername: user.username,
      receiverId: otherUser.uid,
      receiverUsername: otherUser.username,
      message: message
    }

    // SAVE FOR CURRENT USER
    databaseUpdates[`/users/${user.uid}/messages/${uniqueId}/`] = messageObj

    // SAVE FOR OTHER USER
    databaseUpdates[`/users/${otherUser.uid}/messages/${uniqueId}/`] = messageObj


    database
      .ref()
      .update(databaseUpdates)
      .then(() => {
        // this.fetchData();
      });
  }

  setOtherUser(username) {
    const { allUsers } = this.props.authContext;


    let foundUser = [];
    allUsers && Object.keys(allUsers).map(userId =>  {
      const singleUser = allUsers[userId];
      console.log("single user", singleUser)

      if ( singleUser.username.toUpperCase() === username.toUpperCase() ) {
        singleUser.uid = userId;
        foundUser.push(singleUser)
      }
    });


    this.setState({
      otherUser: foundUser.length && foundUser[0] || []
    })

  }

  renderAllUsers() {
    const { allUsers } = this.props.authContext;

    return (
      allUsers &&
      Object.keys(allUsers).map(user => {
        const username = allUsers[user].username;
        return <option value={username} />;
      })
    );
  }

  render() {
    const { user } = this.props.authContext;

    return (
      <div className="container">
        <Link to="/messages" className="message__new">
          messages
        </Link>
        <div className="message__body">
          <div className="message__read">
            To:
            <input
              list="users"
              id="search"
              onChange={e => this.setOtherUser(e.target.value)}
              type="text"
              placeholder="type username!!"
              className="board__comments"
            />
            <datalist id="users">{this.renderAllUsers()}</datalist>
            <div id="match"></div>
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
              {/* <Link to="/messages"> */}
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
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuth(Message);
