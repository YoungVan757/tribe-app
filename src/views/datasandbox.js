import React, { Component } from 'react';
import firebase from '../firebase';

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

    const currentUser = {
      id: '1234-christian'
    };

    const currentTribe = {
      id: 'car-tribe'
    };

    const databaseUpdates = {};

    databaseUpdates[`/comments/${uniqueId}/userId`] = currentUser.id;
    databaseUpdates[`/comments/${uniqueId}/comment`] = this.state.comment;

    databaseUpdates[
      `/users/${currentUser.id}/comments/${uniqueId}/comment`
    ] = this.state.comment;

    databaseUpdates[
      `/tribes/${currentTribe.id}/comments/${uniqueId}/comment`
    ] = this.state.comment;
    databaseUpdates[`/tribes/${currentTribe.id}/comments/${uniqueId}/userId`] =
      currentUser.id;

    database
      .ref()
      .update(databaseUpdates)
      .then(() => {
        this.fetchData();
      });
  }

  getUser(userId) {
    firebase
      .database()
      .ref(`/users/${userId}`)
      .once('value')
      .then(snapshot => {
        console.log('USER SNAPSHOT', snapshot.val());
        const user = snapshot.val();
        alert(`${user.fullName} posted this!`);
      });
  }

  renderComments() {
    const comments =
      this.state.comments &&
      Object.keys(this.state.comments).map(k => {
        const singleComment = this.state.comments[k];
        console.log('SINGLE COMMENT', singleComment);
        return (
          <div onClick={() => this.getUser(singleComment.userId)}>
            <b>{singleComment.comment}</b>
            <br />
            <small>Click to see the user who posted this!</small>
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
        <h4>Recent Comments</h4>
        {this.renderComments()}
      </div>
    );
  }
}
