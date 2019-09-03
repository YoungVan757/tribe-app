import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { WithAuth } from '../../contexts/AuthContext';

import * as UI from '../../UI';
import { Heading, Or, SubHeading } from './styles';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      user: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    const { email, password } = this.state;
    this.props.authContext.handleLoginUser(email, password);
  }

  renderHomepageView() {
    return (
      <React.Fragment>
        <UI.Input
          primary={false}
          height={100}
          title="Email"
          type="email"
          onChange={e => this.setState({ email: e.target.value })}
          placeholder="type email"
          borderColor="gold"
        />

        <UI.Input
          primary={true}
          title="Password"
          type="password"
          borderColor="firebrick"
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

        <Or color="darkorange" padTop={100}>
          Or
        </Or>
        <Or color="purple">Or</Or>

        <Link to="/signup" className="signup__link">
          Sign Up
        </Link>
        <Link to="/forgotpassword" className="link">
          Forgot password?
        </Link>
      </React.Fragment>
    );
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
            <Heading>Tribe</Heading>

            <SubHeading>
              <div className="subheading__parent">
                <div className="subheading__child">Hello, World.</div>
              </div>
            </SubHeading>

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
