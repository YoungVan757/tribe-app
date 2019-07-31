import React, { Component } from 'react';
import Hero from '../../components/Hero';
import ProfileImg from '../../components/ProfileImg';
import Tribe from '../../components/Tribe';
import Board from '../../components/Board';
import firebase from 'firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false
    };
  }

  componentDidMount() {
    const uid = window.localStorage.getItem('tribe_uid');
    const username = window.localStorage.getItem('tribe_username');

    console.log('uid', uid, 'username', username);

    if (uid && username) {
      const user = {
        uid,
        username
      };

      this.setState({
        user
      });
    }
  }

  logout() {
    firebase.auth().signOut()
  }

  render() {
    return <div className="container">
                  <div className="profile">
                    <Hero />
                    <ProfileImg />
                  </div>
                    <Tribe />
                    <Board />
                    <button onClick={this.logout()}>Log out</button>
               </div>;
  }
}
