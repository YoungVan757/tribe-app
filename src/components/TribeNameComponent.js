import React, { Component } from 'react';
import TribeName from './TribeName';
import Headline from './Headline';

export default class TribeNameComponent extends Component {
    render() {
        return (
            <div className="name__container">
                <TribeName />
                <Headline />
            </div>
        );
    }
}