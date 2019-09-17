import React, { Component } from 'react';
import BoardFunctions from './BoardFunctions';

export default class Board extends Component {


    render() {
        return (
            <div className="board">
                <BoardFunctions />
            </div>
        );
    }
}
