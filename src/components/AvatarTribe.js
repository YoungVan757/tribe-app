import React, { Component } from "react";
import firebase from "../firebase";

export default class AvatarTribe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tribes: [],
      images: '',
      imageurl: ""
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const tribeName = this.props.tribeName;
    firebase
      .database()
      .ref(`/tribes/${tribeName}/images`)
      .once("value")
      .then(snapshot => {
        const tribes = snapshot.val();
        this.setState({
          tribes
        });
      });
  }

  render() {
    const uid = window.localStorage.getItem("tribe_uid");
    // const avatartribe= this.state.tribes.imageurl;
    if (uid) {
      return (
        <div className="">
           {/* <img src={avatartribe} alt="Profile Img" className= {this.props.classN} /> */}
        </div>
      );
    }
  }
}
