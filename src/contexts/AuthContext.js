import React, { Component } from 'react';
import firebase from '../firebase';
import { Redirect } from 'react-router-dom';

export const AuthContext = React.createContext(null);

export class AuthProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: false,
      loginError: false
    };

    this.actions = {
      handleLoginUser: (email, password) =>
        this.handleLoginUser(email, password),
        handleLogoutUser: () =>
        this.handleLogoutUser()
    };
  }

  componentDidMount() {
    const uid = window.localStorage.getItem('tribe_uid');
    const username = window.localStorage.getItem('tribe_username');

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

  handleLoginUser(email, password) {
    if (email.length < 4) {
      alert('Please enter an email address.');
      this.setState({
        loginError: true
      });
      return;
    }
    if (password.length < 4) {
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

            const { username } = whatever.val();

            window.localStorage.setItem('tribe_uid', uid);
            window.localStorage.setItem('tribe_username', username);

            const user = {
              uid,
              username
            };

            this.setState({
              user
            });
          });

        // SET STATE TO REDIRECT...
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  handleLogoutUser() {
    firebase.auth().signOut().then(()=> {
      alert('logged out!!');
       return <Redirect to="/" />;
    
    }, function(error) {
      alert('error')
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
