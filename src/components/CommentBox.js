import React, { Component } from 'react';
import Button from '../components/PostButton';
import Arrows from '../components/Arrows';
import Input from '../components/Input';
import Flag from '../components/Flag';

export default class CommentBox extends Component {
    render() {
        return (
    <div className="comment__container">
    <div className="comment">
        <div className="comment__functions">
            <div className="comment__input--avatar">
                <Input type="text" class="comment__input"/>
                <div className="comment__avatar"></div>
            </div>
            <div className="comment__buttons">
                <Button title="post" fontSize="14px"/>
                <Flag />
            </div>
        </div>
        <Arrows />
    </div>
    <div className="user__img"></div>
        </div> );
}
}
