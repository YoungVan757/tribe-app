import React, { Component } from 'react';
import CommentBox from '../../components/CommentBox';
import TribeProfile from '../../components/TribeProfile';
import { css, jsx } from '@emotion/core';

const color = 'darkgreen'

export default class TribePage extends Component {

  render() {
    console.log(this.props.name);
    return <div css={css`
    background-color: hotpink;
    &:hover {
      color: ${color};
    }
  `} className="container">
                <TribeProfile />
                <CommentBox />
                <h1>hi</h1>
           </div>;
  }
}
