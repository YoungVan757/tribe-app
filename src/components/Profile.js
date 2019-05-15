import React, { Component } from 'react';
import Hero from './Hero';
import ProfileImg from './ProfileImg';

export default class Profile extends Component {
    render() {
        return (
            <div className="profile">
                <Hero />
                <ProfileImg />
            </div>
        );
    }
}
