import React, { Component } from "react";
import Favs from "../../../../../../components/Favs";
import TribeNameComponent from "../../../../../../components/TribeNameComponent";
import TribeProfileImg from "../../../../../../components/TribeProfileImg";
import CommentBox from "../../../../../../components/CommentBox";
import firebase from '../../../../../../firebase';

export default class Monster extends Component {
  constructor(props) {
    super(props);
    this.state = {
        tribes:[],
      tribe:'',
      url: ''
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    const tN = 'Monster'
    firebase
      .database()
      .ref(`/tribes/${tN}`)
      .once("value")
      .then(snapshot => {
        const tribes = snapshot.val();
        this.setState({
          tribes
        });
      });
  }

  render() {
    const tN = 'Monster'
    return (
      <div className="containter">
        <div className="profile">
          <div className="hero">
            <div className="interact">
              <Favs tribeName={tN} />
            </div>
            <div className="name__container">
              <TribeNameComponent
                tribeName={tN}
                headLine="Autobiography of Sanyika Shakur"
                classN="profile__img"
              />
            </div>
          </div>
          <TribeProfileImg
            tribeName={tN}
            classN="profile__img"
            url={this.state.tribes.url}
          />
        </div>
        <CommentBox tribeName={tN} />
      </div>
    );
  }
}
