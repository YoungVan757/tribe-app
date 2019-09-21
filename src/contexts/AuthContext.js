import React, { Component } from 'react';
import firebase from '../firebase';

export const AuthContext = React.createContext(null);

export class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allUsers: [],
      user: false,
      loginError: false
    };

    this.actions = {
      handleLoginUser: (email, password) =>
        this.handleLoginUser(email, password),
      handleLogoutUser: () => this.handleLogoutUser(),
      fetchUserData: uid => this.fetchUserData(uid)
    };
  }

  componentDidMount() {
    this.getAllUsers();

    const uid = window.localStorage.getItem('tribe_uid');
    const username = window.localStorage.getItem('tribe_username');

    if (uid && username) {
      this.fetchUserData(uid);
    }
  }

  getAllUsers() {
    firebase
      .database()
      .ref(`/users/`)
      .once('value')
      .then(allUsers => {
        this.setState({
          allUsers: allUsers.val()
        });
      });
  }

  handleLoginUser(email, password) {
    if (email.length < 4) {
      alert('Please enter an email address.');
      this.setState({
        loginError: true
      });
      return;
    }
    if (password.length < 7) {
      alert('Please enter a password.');
      this.setState({
        loginError: true
      });
      return;
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        // SET THE USER INFO..

        const uid = u.user.uid;

        firebase
          .database()
          .ref(`/users/${uid}`)
          .once('value')
          .then(whatever => {
            console.log('THE USER ENTRY', whatever.val());

            const userFromDB = whatever.val();
            const { username } = whatever.val();

            window.localStorage.setItem('tribe_uid', uid);
            window.localStorage.setItem('tribe_username', username);

            const user = {
              uid,
              username,
              ...userFromDB
            };

            this.setState({
              user
            });
          });

        // SET STATE TO REDIRECT...
      });
  }

  handleLogoutUser() {
    firebase
      .auth()
      .signOut()
      .then(
        () => {
          window.localStorage.removeItem('tribe_uid');
          window.localStorage.removeItem('tribe_username');
          window.location.href = '/';
        },
        function(error) {
          alert('error');
        }
      );
  }

  fetchUserData(userId = false) {
    let userIdCopy = null;

    if (userId) {
      userIdCopy = userId;
    } else {
      const { user } = this.state;
      userIdCopy = user.uid;
    }

    firebase
      .database()
      .ref(`/users/${userIdCopy}/`)
      .once('value')
      .then(snapshot => {
        const userData = snapshot.val();

        const refreshedUserObject = {
          uid: userIdCopy,
          ...userData
        };

        this.setState({
          user: refreshedUserObject
        });
      });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{ ...this.state, ...this.actions }}
        {...this.props}
      />
    );
  }
}

export function WithAuth(Component) {
  return function makeAuthComponent(props) {
    return (
      <AuthContext.Consumer>
        {data => <Component {...props} authContext={data} />}
      </AuthContext.Consumer>
    );
  };
}

export default {
  AuthContext,
  AuthProvider,
  WithAuth
};
