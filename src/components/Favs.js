import React, { Component } from 'react';
import firebase from 'firebase';

export default class Favs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      following: false,
      tribe: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref()
      .once('value')
      .then(() => {});
  }

  toggleLike() {
    const currentTribe = {
      id: 'car-tribe'
    };
    const currentUser = {
      id: window.localStorage.getItem('tribe_uid')
    };
    const updates = {};

    updates[
      `tribes/${currentTribe.id}/userId/${currentUser.id}/following`
    ] = true;

    firebase
      .database()
      .ref()
      .update(updates)
      .then(() => {
        this.fetchData();
      });

    document.getElementsByClassName('follow__button')[0].style.backgroundColor =
      'firebrick';
  }

  render() {
    const followClass = this.state.following ? 'following' : 'following-not';

    return <div>Favs</div>;
  }
}

// <div className="favs">
//   <button className='follow__button' onClick={() => this.toggleLike()}
//   className={followClass}
//   >
//     {/* <img width="200" height="200" src="data:image/svg+xml;base64,
//   PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoP
//   SIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNN
//   i4yOCAzYzMuMjM2LjAwMSA0Ljk3MyAzLjQ5MSA1LjcyIDUuMDMxLjc1LTEuNTQ3ID
//   IuNDY5LTUuMDIxIDUuNzI2LTUuMDIxIDIuMDU4IDAgNC4yNzQgMS4zMDkgNC4yNzQgN
//   C4xODIgMCAzLjQ0Mi00Ljc0NCA3Ljg1MS0xMCAxMy01LjI1OC01LjE1MS0xMC05LjU1OS0
//   xMC0xMyAwLTIuNjc2IDEuOTY1LTQuMTkzIDQuMjgtNC4xOTJ6bS4wMDEtMmMtMy4xODMgM
//   C02LjI4MSAyLjE4Ny02LjI4MSA2LjE5MiAwIDQuNjYxIDUuNTcgOS40MjcgMTIgMTUuODA
//   4IDYuNDMtNi4zODEgMTItMTEuMTQ3IDEyLTE1LjgwOCAwLTQuMDExLTMuMDk3LTYuMTgyL
//   TYuMjc0LTYuMTgyLTIuMjA0IDAtNC40NDYgMS4wNDItNS43MjYgMy4yMzgtMS4yODUtMi4y
//   MDYtMy41MjItMy4yNDgtNS43MTktMy4yNDh6Ii8+PC9zdmc+" /> */}
//   </button>
//   </div>
