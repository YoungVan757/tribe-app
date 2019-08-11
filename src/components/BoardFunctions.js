import React, { Component } from 'react';
import PostButtons from '../components/PostButton';
import Trash from '../components/Trash';
import firebase from '../firebase';

export default class BoardFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      users: '',
      user:'',
      uid:'',
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
    const database = firebase.database();
    const commentId = Date.now();
    const username = window.localStorage.getItem('tribe_username');
    const uid = window.localStorage.getItem('tribe_uid')

    const databaseSet = {};

    databaseSet[`/comments/${commentId}/comment/`] = this.state.comment;
    databaseSet[`/comments/${commentId}/author/`] = username

    databaseSet[`/users/${uid}/profilecomments/comment`] = this.state.comment;
    //must add endpoint for other user page
    
    database
      .ref()
      .update(databaseSet)
      .then(() => {
        this.fetchData();
      });
  }

  deleteComment(commentId) {
    const updates = {};
    updates[`/comments/${commentId}`] = null;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.fetchData()
      })

  }

  renderComment() {
    const comments =
      this.state.comments &&
      Object.keys(this.state.comments).map(k => {
        const singleComment = this.state.comments[k];
        return (
          <div className="board__comments">
            {singleComment.comment} 
            <Trash deleteComment={() => this.deleteComment(k)} />
            <div className="user__img" />
          </div>
        );
      });
    return comments;
  }
  render() {
    return (
      <div className="board__functions">
        <div>
          <input
            className="board__input"
            onChange={e => this.setState({ comment: e.target.value })}
            type="text"
            placeholder="Validate My Existence Please"
          />
          <button
            className="board__post"
            onClick={() => this.saveComment()}
            title="Post"
          >
            Post
          </button>
        </div>
        <div>{this.renderComment()}</div>
      </div>
    );
  }
}
