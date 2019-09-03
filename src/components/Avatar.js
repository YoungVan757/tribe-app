import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase';
import { WithAuth } from '../contexts/AuthContext';

class Avatar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      imageurl: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem('tribe_uid');
    firebase
      .database()
      .ref(`/users/${uid}/images`)
      .once('value')
      .then(snapshot => {
        const users = snapshot.val();
        this.setState({
          users
        });
      });
  }

  render() {
    const { user, loginError } = this.props.authContext;
    const uid = window.localStorage.getItem('tribe_uid');
    const avatar = this.state.users && this.state.users.imageurl;

    if (!uid) return null;

    return (
      <Link to={`/profile/${user.username}`}>
        <img src={avatar} alt="Profile Img" className={this.props.classN} />
      </Link>
    );
  }
}

export default WithAuth(Avatar);
