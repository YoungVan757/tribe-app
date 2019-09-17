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
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref('/users/')
      .once('value')
      .then(snapshot => {
        const users = snapshot.val();
        this.setState({
          users
        });
      });
  }


  logout() {
    const { user } = this.state.user;
    this.props.authContext.handleLogoutUser(user);
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
        <button onClick={() => this.logout()}>Log out</button>
      </div>
    );
  }
}

export default WithAuth(Profile);
