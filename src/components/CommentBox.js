import React, { Component } from "react";
import Arrows from "../components/Arrows";
import Trash from "../components/Trash";
import Flag from "../components/Flag";
import Avatar from '../components/Avatar';
import firebase from "../firebase";

export default class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tribes: [],
      comment: "",
      comments: [],
      users: "",
      user: "",
      uid: ""
    };
    this.renderComments = this.renderComments.bind(this);
    this.saveComment = this.saveComment.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const tribeName = this.props.tribeName;
    firebase
      .database()
      .ref(`/tribes/${tribeName}/comments`)
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
    const tribeName = this.props.tribeName;

    const databaseSet = {};

    databaseSet[
      `/tribes/${tribeName}/comments/${commentId}/comment`
    ] = this.state.comment;
    databaseSet[`/tribes/${tribeName}/comments/${commentId}/author`] = username;
    databaseSet[`/tribes/${tribeName}/comments/${commentId}/date`] = Date.now();

    databaseSet[
      `/users/${uid}/tribes/${tribeName}/comments/${commentId}/comment`
    ] = this.state.comment;
    databaseSet[
      `/users/${uid}/tribes/${tribeName}/comments/${commentId}/date`
    ] = Date.now();

    database
      .ref()
      .update(databaseSet)
      .then(() => {
        this.fetchData();
      });
  }

  deleteComment(commentId) {
    const tribeName = this.props.tribeName;
    const updates = {};
    const uid = window.localStorage.getItem("tribe_uid");
    updates[`/tribes/${tribeName}/comments/${commentId}`] = null;
    updates[`/users/${uid}/tribes/${tribeName}/comments/${commentId}`] = null;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.fetchData();
      });
  }

  renderComments() {
    const comments =
      this.state.comments &&
      Object.keys(this.state.comments).map(k => {
        const singleComment = this.state.comments[k];
        return (
          <div className="comment__box">
            <div> {singleComment.comment} </div><Avatar classN='user__img'/>
            <Arrows />
            <Flag />
            <Trash deleteComment={() => this.deleteComment(k)} />
          </div>
        );
      });
    return comments;
  }
  render() {
    return (
      <div className="comment__container">
        <div>
          <div className="comment">
            <div className="comment__functions">
              <div className="comment__input--box">
                <input
                  onChange={e => this.setState({ comment: e.target.value })}
                  type="text"
                  placeholder="type here dude"
                  className="comment__input"
                />
                <button
                  onClick={() => this.saveComment()}
                  className="comment__post"
                  title="post"
                  fontSize="24px"
                  
                >
                  post
                </button>
              </div>
              <div>{this.renderComments()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
