import React, { Component } from 'react';

export default class MessageRead extends Component {
    render() {
        return (
            <div className="message__read"> {this.props.message}
            </div>
        );
    }
}
