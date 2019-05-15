import React, { Component } from 'react';
import PostButton from './PostButton';
import StalkButton from './StalkButton';

export default class Board extends Component {
    render() {
        return (
            <div className="board__buttons">
                <PostButton title="Post"/>
                <StalkButton title="Stalk"/>
            </div>
        );
    }
}