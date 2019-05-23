import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../components/FormField';

export default class Homepage extends Component {
  render() {
    return (
      <div claasName="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="homepage__heading">Tribe</div>
              <FormField
                title="Email"
                inputType="text"
                color="gold"
                borderColor="gold"
              />
              <FormField
                title="Password"
                inputType="password"
                color="firebrick"
                borderColor="firebrick"
              />
            <Link to="/profile/index" className="login__link">
            Log In
          </Link>

              <div className="homepage__or"> or</div>

              <Link to="/signup" className="signup__link">
            Sign Up
          </Link>

          </div>
        </div>
      </div>
    );
  }
}
