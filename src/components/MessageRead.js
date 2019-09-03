import React, { Component } from 'react';
import firebase from '../firebase';

export default class MessageRead extends Component {
    constructor(props) {
        super(props);
        this.state={
            users:[],
            username: ''
        }
    }

    componentDidMount() {
        this.fetchData() 
    }

    fetchData() {
        firebase
          .database()
          .ref('/users')
          .once("value")
          .then(snapshot => {
            const users = snapshot.val();
            this.setState({
              users
            });
          });
      }

      

//     render() {
// const search = document.getElementById('usersearch')
//       const match = document.getElementById('match')

//       const searchUsernames = async searchText => {
//          {this.state.users}
//           console.log(users.username)
     

//       search.addEventListener('input', searchUsernames(search.value))
 

//       let matches = states.filter(state => {
//           const regex = new RegExp(`^${searchText}`, 'gi');
//           return this.state.username.math(regex) || this.state.username.match(regex);
//       })
//       if (searchText.length === 0) {
//           matches = [];
//       }

//       outputHTML(matches);

//       const outputHTML = matches => {
//           if(matches.length > 0) {
//               const html = matches.map(match => `{match.username}`)
//           }
//       }
//         return (
//             <div className="message__read"> 
//                 To:
//                 <input
//                   id='userSearch'
//                   onChange={e => this.setState({ username: e.target.value })}
//                   type="text"
//                   placeholder="type username"
//                   className="board__comments"
//                 />
//                 <div id='match'></div>
//             </div>
//         );
//     }

//     }
}