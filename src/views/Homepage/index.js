import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';
import firebase from 'firebase';
import Signup from '../Signup';
import About from '../About';

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
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

  login() {
    var email = document.getElementById('emailInput').value;
    var password = document.getElementById('passwordInput').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
  }

  renderHomepageView() {
    const { user } = this.state;

    if (!user) {
      return (
        <React.Fragment>
          <input
            className="form-field"
            id="emailInput"
            title="Email"
            inputType="email"
            style={{ color: 'gold' }}
            onChange={this.handleChange}
            placeholder="type email"
          />
          <input
            className="form-field"
            id="passwordInput"
            title="Password"
            inputType="password"
            style={{ color: 'firebrick' }}
            onChange={this.handleChange}
            placeholder="type password"
          />
          <Link to="/profile/index">
            <button
              className="login__link"
              type="submit"
              onClick={() => this.login()}
            >
              Log In
            </button>
          </Link>
          <div className="homepage__or"> or</div>

          <Link to="/signup" className="signup__link">
            Sign Up
          </Link>
          <Link to="/forgotpassword" className="link">
            Forgot password?
          </Link>
        </React.Fragment>
      );
    }

    return <h1>Welcome back, {this.state.user && this.state.user.username}</h1>;
  }

  render() {
    return (
      <div className="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="homepage__heading">Tribe</div>
            {this.renderHomepageView()}
          </div>
        </div>
      </div>
    );
  }
}
