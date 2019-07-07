import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from 'firebase';

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state={
      email: '',
      password: '',
  };
};


signUp() {
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
  // Sign in with email and pass.
  // [START createwithemail]
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
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
    return(
      <div claasName="container">
        <div className="backyard">
          <div className="flex__container">
              <div className="heading">Sign Up</div>
              <input
                className='form-field'
                title="Username"
                inputType="text"
                style={{color: 'gold'}}
                placeholder="type username"
              ></input>
              <input
              className='form-field'
                id='emailInput'
                title="Email"
                inputType="email"
                color="darkgreen"
                style={{color: 'firebrick'}}
                placeholder="type email"
              ></input>
              <input
              className='form-field'
                id='passwordInput'
                title="Password"
                inputType='password'
                style={{color: 'darkgreen'}}
                placeholder="type password"
              ></input>
              <Link to="/"><button onClick={(e) => this.signUp()} title="Submit" borderColor="black">Sign Up</button></Link>
          </div>
        </div>
      </div>
    );
  }};
