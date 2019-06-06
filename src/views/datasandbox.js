import React, { Component } from 'react';
import firebase from '../database';

export default class DataSandBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      comments: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref('/comments/')
      .once('value')
      .then(snapshot => {
        const comments = snapshot.val();
        this.setState({
          comments
        });
      });
  }

  saveComment() {
    // Our Firebase code goes here..

    const database = firebase.database();

    const uniqueId = Date.now();

    database
      .ref(`/comments/${uniqueId}`)
      .set({
        comment: this.state.comment
      })
      .then(() => {
        this.fetchData();
      });
  }

  renderComments() {
    const comments =
      this.state.comments &&
      Object.keys(this.state.comments).map(k => {
        const singleComment = this.state.comments[k];
        console.log('SINGLE COMMENT', singleComment);
        return (
          <div>
            {singleComment.comment}
            <hr />
          </div>
        );
      });

    return comments;
  }

  render() {
    return (
      <div>
        <h3>Firebase Sandbox</h3>
        <input
          onChange={e => this.setState({ comment: e.target.value })}
          type="text"
          placeholder="Type here"
        />
        <button onClick={() => this.saveComment()}>Add comment</button>
        <h4>Comments</h4>
        {this.renderComments()}
      </div>
    );
  }
}
