import React, { Component } from 'react';
import PostButton from './PostButton';

export default class Board extends Component {
    render() {
        return (
            <div className="board__buttons">
                <PostButton title="Post"/>
            </div>
        );
    }
}