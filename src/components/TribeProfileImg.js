import React, { Component } from 'react';
import firebase from 'firebase';
import { storage } from 'firebase';

export default class TribeProfileImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: '',
      progress: 0,
      user: false
    }
      this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.addData = this.addData.bind(this);
  }

  componentDidMount() {
    const uid = window.localStorage.getItem('tribe_uid');
    const username = window.localStorage.getItem('tribe_username');

    console.log('uid', uid, 'username', username);

    if (uid && username) {
      const user = {
        uid,
        username
      };

      this.setState({
        user
      });
    }
  }

  handleChange = e => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      this.setState(() => ({image}));
    }
  }
    handleUpload() {
      const {image} = this.state;
      const users = {};
      const img = this.state.image;
      const uploadTask = storage()
                        .ref(`images/${image.name}`)
                        .put(image);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / 
          snapshot.totalBytes) * 100);
        this.setState({progress});
      }, 
      (error) => {
           // error function ....
        console.log(error);
      }, 
    () => {
        // complete function ....
        storage()
        .ref('images')
        .child(image.name)
        .getDownloadURL()
        .then(url => {
            console.log(url);
            console.log(image);
            this.setState({url});
        })
  })
}
    addData() {
      const database = firebase.database();
    const imageId = Date.now();
    const username = window.localStorage.getItem('tribe_username');
    const uid = window.localStorage.getItem('tribe_uid')

    const databaseSet = {};

    databaseSet[`/users/${uid}/images/${imageId}`] = imageId;
    
    database
      .ref()
      .set(databaseSet)
      .then(() => {
        this.fetchData();
      });
  }
    


    render() {
      return<div className='container'>
            
      <progress value={this.state.progress} max='100'/>
      <img src={this.state.url || 'http://via.placeholder.com/400x400'}
           alt='Profile Img'
            className='profile__img'
              />
      <input  name="file"
              type='file'
              className="link"
              label='Picture'
              onChange={this.handleChange}/>
      <button onClick={(e) => {this.handleUpload(e); this.addData(e)}}
      >Upload</button>
      </div>
    }}