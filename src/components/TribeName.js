import React, { Component } from 'react';
import firebase from '../firebase';

export default class TribeName extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tribes: []
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    firebase
      .database()
      .ref('/tribes')
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
            <div className="name">
            {this.props.tribeName}
            </div>
        );
    }
}