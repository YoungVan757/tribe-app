import React, { Component } from 'react';
import NameComponent from './NameComponent';
import Favs from './Favs';
import ProfileImg from './ProfileImg';

export default class TribeProfile extends Component {
    render() {
        return (
            <div className="profile">
              <div className="hero">
                  <div className="interact">
                    <Favs />
                  </div>
                  <div className="name__container">
                    <NameComponent />
                  </div>

              </div>
              <ProfileImg/>
            </div>
        )
    }
}