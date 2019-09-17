import React, { Component } from "react";
import firebase from "../firebase";

export default class TribeProfileImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      url: "",
      tribes:[],
      uid: ""
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
    
    return (
      
      <div className="container">
        
        <img src={this.props.url} alt="Profile Img" className= {this.props.classN} />

      </div>
    );
  }
}
