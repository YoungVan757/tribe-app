import React, { Component } from "react";
import Trash from "../components/Trash";
import Avatar from '../components/Avatar';
import firebase from "../firebase";

export default class BoardFunctions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      users: "",
      user: "",
      uid: "",
      comments: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem("tribe_uid");
    firebase
      .database()
      .ref(`/users/${uid}/profilecomments`)
      .once("value")
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
    const username = window.localStorage.getItem("tribe_username");
    const uid = window.localStorage.getItem("tribe_uid");

    const databaseSet = {};

    databaseSet[
      `/users/${uid}/profilecomments/${commentId}/comment`
    ] = this.state.comment;
    databaseSet[`/users/${uid}/profilecomments/${commentId}/recipient`] =
      "otheruser";
    databaseSet[`/users/${uid}/profilecomments/${commentId}/date`] = Date.now();

    databaseSet[
      `/users/otheruser/commentsreceived/${commentId}/comment`
    ] = this.state.comment;
    databaseSet[
      `/users/otheruser/commentsreceived/${commentId}/author`
    ] = username;
    databaseSet[
      `/users/otheruser/commentsreceived/${commentId}/date`
    ] = Date.now();
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
    const uid = window.localStorage.getItem("tribe_uid");
    updates[`/users/${uid}/profilecomments/${commentId}`] = null;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.fetchData();
      });
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
            <Avatar classN='user__img'/>
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
