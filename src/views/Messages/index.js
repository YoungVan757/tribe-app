import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../../firebase';
import MessagesComponent from '../../components/MessagesComponent';

export default class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      users:[],
      user:'',
      uid:'',
      messages: [],
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem("tribe_uid");
    firebase
      .database()
      .ref(`/users/${uid}/messages`)
      .once('value')
      .then(snap => {
        const messages = snap.val();
        this.setState({
          messages
        });
      });
  }



  render() {
    return (
      
      <div className="message__container">
        <div className="message__button">
          <Link to="/message" className="message__new">
            new message
          </Link>
        </div>
        <MessagesComponent/>
      </div>
    );
  }
}
