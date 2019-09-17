import React, { Component } from "react";
import firebase from "../firebase";
import { storage } from "firebase";
import Avatar from "./Avatar";

export default class ProfileImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      progress: 0,
      users: [],
      imageurl: "",
      images: "",
      uid: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const uid = window.localStorage.getItem("tribe_uid");
    firebase
      .database()
      .ref(`/users/${uid}/images`)
      .once("value")
      .then(snapshot => {
        const users = snapshot.val();
        this.setState({
          users
        });
      });
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({ image }));
    }
  };
  handleUpload() {
    const { image } = this.state;
    const uploadTask = storage()
      .ref(`images/${image.name}`)
      .put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        // progrss function ....
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        // error function ....
        console.log(error);
      },
      () => {
        // complete function ....
        storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            console.log(url);
            console.log(image);
            this.setState({ url });
            const uid = window.localStorage.getItem("tribe_uid");
            const databaseSet = {};
            databaseSet[`/users/${uid}/images/imageurl`] = url;
            firebase
              .database()
              .ref()
              .update(databaseSet);
          });
      }
    );
  }
  render() {
    const nada = (this.state.uid === true ? 'inline' : 'none' );
    return (
      <div className="container">
        
        <Avatar classN="profile__img"/><progress value={this.state.progress} max="100" />
        <div className='message__button'>
          <input
            display={nada}
            name="file"
            type="file"
            className="board__comments"
            label="Picture"
            onChange={this.handleChange}
          />
          <button 
            display={nada} 
            className="board__comments" 
            onClick={e => this.handleUpload(e)}>Upload</button></div>
      </div>
    );
  }
}
