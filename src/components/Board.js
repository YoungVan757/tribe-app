import React, { Component } from 'react';
import BoardFunctions from './BoardFunctions';
import firebase from '../firebase';

export default class Board extends Component {


    render() {
        return (
            <div className="board">
                <BoardFunctions />
            </div>
        );
    }
}
