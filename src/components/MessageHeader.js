import React, { Component } from 'react';
import firebase from 'firebase';
import { Link } from 'react-router-dom';

export default class MessageHeader extends Component {

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
      
        const databaseUpdates = {};
      
        databaseUpdates[`/user/user1/messages/user2/uniqueId/message`] = 'yo';
      
        databaseUpdates[`/user/user2/messages/user1/uniqueId/message`] = 'yo';
      
      
        database
        .ref()
        .update(databaseUpdates)
        .then(() => {
          this.fetchData();
        });
      }

    render() {
        return (
            <div className="message__header--info">
              <div> To:<input type="text"
                              placeholder="type username"></input></div><br></br>
              <div>Subject:<input type="text"
                                  placeholder="type subject"></input></div><br></br>
            
            <Link to="/messagesent"><button onClick={()=>this.sendMessage()} className="message__header--button"><img width="220" height="220" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMCAzdjE4aDI0di0xOGgtMjR6bTYuNjIzIDcuOTI5bC00LjYyMyA1LjcxMnYtOS40NThsNC42MjMgMy43NDZ6bS00LjE0MS01LjkyOWgxOS4wMzVsLTkuNTE3IDcuNzEzLTkuNTE4LTcuNzEzem01LjY5NCA3LjE4OGwzLjgyNCAzLjA5OSAzLjgzLTMuMTA0IDUuNjEyIDYuODE3aC0xOC43NzlsNS41MTMtNi44MTJ6bTkuMjA4LTEuMjY0bDQuNjE2LTMuNzQxdjkuMzQ4bC00LjYxNi01LjYwN3oiLz48L3N2Zz4="></img></button></Link> 
        </div>);
    }
}
