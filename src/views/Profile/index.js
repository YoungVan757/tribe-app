import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Hero from '../../components/Hero';
import ProfileImg from '../../components/ProfileImg';
import Tribe from '../../components/Tribe';
import Board from '../../components/Board';
import firebase from '../../firebase';
import { WithAuth } from '../../contexts/AuthContext';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      testName: 'Bob'
    };

    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    window.addEventListener('fullscreenchange', (e) => this.runMe(e))
  }

  logout() {
    const { user } = this.state;
    this.props.authContext.handleLogoutUser(user);
  }

  runMe(event) {
    console.log("user is ins full screen mode")
    // if (event.key === 'Enter' ) {
    //   alert("you pressed the magic key");
    //   // submit the post..
    // }
    // console.log(e)
  
  }

  render() {
    const { user } = this.props.authContext;
    if (!user) {
      return <Redirect to="/" />;
    }
    return (
      <div className="container">
        <div className="profile">
          <Hero />
          <ProfileImg />
        </div>
        <Tribe />
        <Board />
        <button onClick={(e) =>this.runMe(e)}>Run Me</button>
        <button onClick={() => this.logout()}>Log out</button>
      </div>
    );
  }
}

export default WithAuth(Profile);
