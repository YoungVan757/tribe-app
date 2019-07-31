import React, { Component } from 'react';
import TribeNameComponent from './TribeNameComponent';
import Favs from './Favs';
import TribeProfileImg from './TribeProfileImg';

export default class TribeProfile extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
        name: '',
        members: '',
        comments: '',
        image: '',
        tribename: ''
    }
}
    render() {
        return (
            <div className="profile">
              <div className="hero">
                  <div className="interact">
                    <Favs />
                  </div>
                  <div className="name__container">
                    <TribeNameComponent />
                  </div>

              </div>
              <TribeProfileImg/>
            </div>
        )
    }
}