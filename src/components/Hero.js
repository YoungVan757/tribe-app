import React, { Component } from 'react';
import Interact from './Interact';
import NameComponent from './NameComponent';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <Interact />
                <NameComponent />
            </div>
        );
    }
}