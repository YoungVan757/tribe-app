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
    // keyup happens everytime a user presses a key
    window.addEventListener('keyup', this.runMe)
  }

  componentWillUnmount() {
    // Remove the listenser so other components don't need to worry about it
    // once the user leaves this page.
    window.removeEventListener('keyup', this.runMe)
  }
 

  logout() {
    const { user } = this.state;
    this.props.authContext.handleLogoutUser(user);
  }

  runMe(event) {
    console.log("key was pressed", event)
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
