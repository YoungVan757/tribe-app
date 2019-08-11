import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../firebase';
import { WithAuth } from '../../contexts/AuthContext';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  login() {
    const { email, password } = this.state;
    this.props.authContext.handleLoginUser(email, password);
  }

  renderHomepageView() {

    // SUGGESTION: Maybe make the sign up link a secondary style. 

    // Also, can remove !user check, becasue this function "renderHomepageView" only
    // runs if there is no user anyway.. check the render method for ref.

    const { user } = this.props.authContext;

    if (!user) {
      return (
        <React.Fragment>
          <input
            className="form-field"
            id="emailInput"
            title="Email"
            type="email"
            style={{ color: 'gold' }}
            onChange={e => this.setState({ email: e.target.value })}
            placeholder="type email"
          />
          <input
            className="form-field"
            id="passwordInput"
            title="Password"
            type="password"
            style={{ color: 'firebrick' }}
            onChange={e => this.setState({ password: e.target.value })}
            placeholder="type password"
          />

          <button
            className="login__link"
            type="submit"
            onClick={() => this.login()}
          >
            Log In
          </button>

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
    const { user, loginError } = this.props.authContext;

    if (user) {
      return <Redirect to={`/profile/${user.username}`} />;
    }

    console.log('HOMEPAGE PROPS', this.props);

    return (
      <div className="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="homepage__heading">Tribe</div>

            {loginError ? (
              <div style={{ color: 'red' }}>EMAIL OR PASSWORD IS WRONG!!!</div>
            ) : null}

            {this.renderHomepageView()}
          </div>
        </div>
      </div>
    );
  }
}

export default WithAuth(Homepage);
