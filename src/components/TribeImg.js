import React, { Component } from 'react';
import Tribe1 from './Tribe1';
import Tribe2 from './Tribe2';
import Tribe3 from './Tribe3';

export default class TribeImg extends Component {
    render() {
        return (
            <div className="tribe__img">
            <Tribe1 />
            <Tribe2 />
            <Tribe3 />
            </div>
        );
    }
}
