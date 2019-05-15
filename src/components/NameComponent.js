import React, { Component } from 'react';
import Name from './Name';
import Headline from './Headline';

export default class NameComponent extends Component {
    render() {
        return (
            <div className="name__container">
                <Name />
                <Headline />
            </div>
        );
    }
}