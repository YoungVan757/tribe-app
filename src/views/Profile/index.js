import React, { Component } from 'react';
import Hero from '../../components/Hero';
import ProfileImg from '../../components/ProfileImg';
import Tribe from '../../components/Tribe';
import Board from '../../components/Board';
import firebase from 'firebase';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.state = {
      username: ''
    };
  }

  componentDidMount() {
    console.log("profile props", this.props)
    this.setProfileName(this.props.match.params['username']);
  }

  componentWillReceiveProps(nProps) {
    this.setProfileName(nProps.match.params['username']);
  }

  setProfileName(profileName) {
    this.setState({
      username: profileName
    });
  }

  logout() {
    firebase.auth().signOut();
  }

  render() {
    return <div>This is the profile of {this.state.username}
              <div className="container">
                  <div className="profile">
                    <Hero />
                    <ProfileImg />
                  </div>
                    <Tribe />
                    <Board />
                    <button onClick={this.logout}>Log out</button>
               </div>

           </div>;
  }
}
