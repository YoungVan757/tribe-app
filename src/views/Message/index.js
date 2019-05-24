import React, { Component } from 'react';
import Formfield from '../../components/FormField';
import MessageRead from '../../components/MessageRead';
import MessageHeader from '../../components/MessageHeader';

export default class Message extends Component {
  render() {
    return <div className="message__body">
              <div className="message__textboxes">
              <MessageRead />
              <div className="message__line"></div>
              <input type="text" className="message__write" placeholder="Hey dude"></input>
              </div>
              <div className="message__header">
              <MessageHeader />
              </div>
              </div>

    ;
  }
}
