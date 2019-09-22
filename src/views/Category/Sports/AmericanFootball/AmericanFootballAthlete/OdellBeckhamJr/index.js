import React, { Component } from "react";
import Favs from "../../../../../../components/Favs";
import TribeNameComponent from "../../../../../../components/TribeNameComponent";
import TribeProfileImg from "../../../../../../components/TribeProfileImg";
import CommentBox from "../../../../../../components/CommentBox";
import firebase from '../../../../../../firebase';

export default class OdellBeckhamJr extends Component {
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
    const tN = 'Odell Beckham Jr'
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
    const tN = 'Odell Beckham Jr'
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
                headLine="Wide receiver on the Cleveland Browns"
                classN="profile__img"
              />
            </div>
          </div>
          <TribeProfileImg
            tribeName={tN}
            classN="profile__img"
            // url={this.state.tribes.url}
          />
        </div>
        <CommentBox tribeName={tN} />
      </div>
    );
  }
}
