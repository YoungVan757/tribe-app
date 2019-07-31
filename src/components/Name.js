import React, { Component } from 'react';

export default class Name extends Component {
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
  
    render() {
        return (
            <div className="name">
            {this.state.user && this.state.user.username}
            </div>
        );
    }
}