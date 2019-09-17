import React, { Component } from "react";
import firebase from "../firebase";

import { WithAuth } from '../contexts/AuthContext';

class Headline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "",
      on: ""
    };
    this.editHeadline = this.editHeadline.bind(this);
  }

  setHeadline() {

    const { user , fetchUserData} = this.props.authContext;
    const uid = user && user.uid;
    
    const databaseSet = {};
    databaseSet[`/users/${uid}/headline`] = this.state.headline;

    firebase
      .database()
      .ref()
      .update(databaseSet)
      .then(() => {
        fetchUserData();
      });

    this.setState({
      on: false
    });
  }

  editHeadline() {
    this.setState({
      on: true
    });
  }


  render() {

    const headline = this.props.authContext.user && this.props.authContext.user.headline;

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


export default WithAuth(Headline);