import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MessageRead from '../../components/MessageRead';
import MessageHeader from '../../components/MessageHeader';
import firebase from 'firebase';

export default class Message extends Component {
  constructor(props){
    super(props);
    this.state={
      message:''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref('/comments/')
      .once('value')
      .then(snapshot => {
        const comments = snapshot.val();
        this.setState({
          comments
        });
      });
  }

sendMessage() {

  
    const database = firebase.database();
    const uniqueId = Date.now();
  
    const databaseUpdates = {};
    // SENDING MESSAGES..

    // 1. Who am i?
    // 2. Who am i sending a message to?
    // 3. What's the message?
    // 4. When am I sending it (date)?
  
    databaseUpdates[`/user/user1/messages/user2/${uniqueId}/message`] = this.state.message;
    databaseUpdates[`/users/user-1/messages/user-2/${uniqueId}/sender/`] = 'user-1';
    databaseUpdates[`/users/user-1/messages/user-2/${uniqueId}/date/`] = Date.now()
  
    databaseUpdates[`/user/user2/messages/user1/${uniqueId}/message`] = this.state.message;
    databaseUpdates[`/users/user-2/messages/user-1/${uniqueId}/sender/`] = 'user-1';
    databaseUpdates[`/users/user-2/messages/user-1/${uniqueId}/date/`] = Date.now()
  
  
    database
    .ref()
    .update(databaseUpdates)
    .then(() => {
      this.fetchData();
    });
  }

  render() {
    return<div className="container">
      <Link to="/messages" className="message__new">messages</Link>
        <div className="message__body">
              <div className="message__textboxes">
              <MessageRead />
              <div className="message__line"></div>
              <input
                    onChange={e=>this.setState({ message: e.target.value})} 
                    type="text" className="message__write" placeholder="Hey dude"></input>
              </div>
              <div className="message__header">
              <div className="message__header--info">
              <div> To:<input type="text"
                              placeholder="type username"></input>
                              </div><br></br>
              <div>Subject:<input type="text"
                                  placeholder="type subject"></input>
                                  </div><br></br>
            
            <Link to="/messagesent"><button onClick={()=>this.sendMessage()} className="message__header--button"><img width="220" height="220" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="></img></button></Link> 
              </div>
          </div>
          </div></div>
    ;
  }
}
