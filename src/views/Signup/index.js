import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from 'firebase';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      shouldRedirect: false
    };
  }

  signUp() {
    const { username, email, password } = this.state;

    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    // Sign in with email and pass.
    // [START createwithemail]
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userObj => {
        const { uid } = userObj.user;

        const updates = {};
        updates[`/users/${uid}/username`] = username;
        updates[`/users/${uid}/email`] = email;
        updates[`/foods/banana/eaten`] = true;
        

        firebase
          .database()
          .ref()
          .update(updates)
          .then(() => {
            // Authenticate the user in the APP, and let them in the door..
            window.localStorage.setItem('tribe_uid', uid);
            window.localStorage.setItem('tribe_username', username);

            this.setState({
              shouldRedirect: true
            });
          });

        // Where we save any additional info about our new user..
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }

  render() {
    if (this.state.shouldRedirect) {
      return <Redirect to="/profile/van" />;
    }

    return (
      <div claasName="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="heading">Sign Up</div>

            <input
              onChange={e => this.setState({ username: e.target.value })}
              className="form-field"
              style={{ color: 'gold' }}
              placeholder="type username"
            />
            <input
              className="form-field"
              onChange={e => this.setState({ email: e.target.value })}
              inputType="email"
              color="darkgreen"
              style={{ color: 'firebrick' }}
              placeholder="type email"
            />
            <input
              onChange={e => this.setState({ password: e.target.value })}
              className="form-field"
              type="password"
              style={{ color: 'darkgreen' }}
              placeholder="type password"
            />

            <button
              onClick={e => this.signUp()}
              title="Submit"
              borderColor="black"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}
