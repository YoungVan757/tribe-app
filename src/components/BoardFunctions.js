import React, { Component } from 'react';
import BoardButtons from './BoardButtons';
import Input from './Input';

export default class BoardFunctions extends Component {
    render() {
        return (
            <div className="board__functions">
                <Input placeholder="Validate My Existence Please" />
                <BoardButtons />
            </div>
        );
    }
}