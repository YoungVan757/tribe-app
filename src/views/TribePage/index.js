import React, { Component } from 'react';
import CommentBox from '../../components/CommentBox';
import TribeProfile from '../../components/TribeProfile';

export default class TribePage extends Component {

  render() {
    console.log(this.props.name);
    return <div className="container">
                <TribeProfile />
                <CommentBox />
                <h1>hi</h1>
           </div>;
  }
}
