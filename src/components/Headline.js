import React, { Component } from "react";
import firebase from "../firebase";

export default class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: false,
      users: [],
      uid: "",
      headline: "",
      on: ""
    };
    this.editHeadline = this.editHeadline.bind(this);
    // this.renderHeadline = this.renderHeadline.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem("tribe_uid");
    firebase
      .database()
      .ref(`/users/${uid}/headline`)
      .once("value")
      .then(snapshot => {
        const users = snapshot.val();
        this.setState({
          users
        });
      });
  }

  setHeadline() {
    const uid = window.localStorage.getItem("tribe_uid");

    const databaseSet = {};

    databaseSet[`/users/${uid}/headline`] = this.state.headline;

    firebase
      .database()
      .ref()
      .update(databaseSet)
      .then(() => {
        this.fetchData();
      });
    this.setState({
      on: !this.state.on
    });
  }

  editHeadline() {
    this.setState({
      on: !this.state.on
    });
  }

  render() {
    const headline = this.state.on ? "" : this.state.users && this.state.uid.headline;

    return (
      <div className="headline">
        <div style={{ display: this.state.on ? "none" : "block" }}>
          {headline}
          <button onClick={() => this.editHeadline()}>
            <img alt='edit headline' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNNy4xMjcgMjIuNTY0bC03LjEyNiAxLjQzNiAxLjQzOC03LjEyNSA1LjY4OCA1LjY4OXptLTQuMjc0LTcuMTA0bDUuNjg4IDUuNjg5IDE1LjQ2LTE1LjQ2LTUuNjg5LTUuNjg5LTE1LjQ1OSAxNS40NnoiLz48L3N2Zz4=" />
          </button>
        </div>
        <input
          style={{ display: this.state.on ? "block" : "none" }}
          onChange={e => this.setState({ headline: e.target.value })}
          type="text"
          placeholder="type headline then click button"
          className="comment__input"
        />
        <button
          style={{ display: this.state.on ? "block" : "none" }}
          onClick={() => this.setHeadline()}
        >
          Submit
        </button>
      </div>
    );
  }
}
