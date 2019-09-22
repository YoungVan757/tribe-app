import React, { Component } from "react";
import firebase from "../firebase";

export default class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joined: false,
      tribes: []
    };
    this.join = this.join.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const tribeName = this.props.tribeName;
    firebase
      .database()
      .ref(`tribes/${tribeName}`)
      .once("value")
      .then(snapshot => {
        const tribes = snapshot.val();
        this.setState({
          tribes
        });
      });
  }

  join() {
    if (this.state.joined === false) {
      const username = window.localStorage.getItem("tribe_username");
      const tribeName = this.props.tribeName;
      const uid = window.localStorage.getItem("tribe_uid");
      const join = {};

      join[`/tribes/${tribeName}/members/${uid}/joined`] = true;
      join[`/tribes/${tribeName}/members/${uid}/username`] = username;
      join[`/tribes/${tribeName}/members/${uid}/date`] = Date.now();
      join[`/tribes/${tribeName}/members/${uid}/iscool`] = true;

      join[`/users/${uid}/tribes/${tribeName}/joined`] = true;
      join[`/users/${uid}/tribes/${tribeName}/date`] = Date.now();

      firebase
        .database()
        .ref()
        .update(join)
        .then(() => {
          this.fetchData();
        });

      this.setState({
        joined: !this.state.joined
      });
    } else {
      const updates = {};
      const tribeName = this.props.tribeName;
      const uid = window.localStorage.getItem("tribe_uid");
      updates[`/tribes/${tribeName}/members/${uid}`] = null;
      updates[`/users/${uid}/tribes/${tribeName}`] = null;
      firebase
        .database()
        .ref()
        .update(updates)
        .then(() => {
          this.fetchData();
        });
      this.setState({
        joined: !this.state.joined
      });
    }
  }
  render() {
    const joinedTribe = this.state.joined === true ? "Leave?" : "Join?";
    const bgc = this.state.joined === true ? "firebrick" : "deeppink";

    return (
      <div className="favs">
        <button
          className="join__button"
          style={{ backgroundColor: bgc }}
          onClick={() => this.join()}
        >
          <img
            alt='join tribe'
            width="200"
            height="200"
            src="data:image/svg+xml;base64,
  PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoP
  SIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNN
  i4yOCAzYzMuMjM2LjAwMSA0Ljk3MyAzLjQ5MSA1LjcyIDUuMDMxLjc1LTEuNTQ3ID
  IuNDY5LTUuMDIxIDUuNzI2LTUuMDIxIDIuMDU4IDAgNC4yNzQgMS4zMDkgNC4yNzQgN
  C4xODIgMCAzLjQ0Mi00Ljc0NCA3Ljg1MS0xMCAxMy01LjI1OC01LjE1MS0xMC05LjU1OS0
  xMC0xMyAwLTIuNjc2IDEuOTY1LTQuMTkzIDQuMjgtNC4xOTJ6bS4wMDEtMmMtMy4xODMgM
  C02LjI4MSAyLjE4Ny02LjI4MSA2LjE5MiAwIDQuNjYxIDUuNTcgOS40MjcgMTIgMTUuODA
  4IDYuNDMtNi4zODEgMTItMTEuMTQ3IDEyLTE1LjgwOCAwLTQuMDExLTMuMDk3LTYuMTgyL
  TYuMjc0LTYuMTgyLTIuMjA0IDAtNC40NDYgMS4wNDItNS43MjYgMy4yMzgtMS4yODUtMi4y
  MDYtMy41MjItMy4yNDgtNS43MTktMy4yNDh6Ii8+PC9zdmc+"
          />
          {joinedTribe}
        </button>
      </div>
    );
  }
}
