import React, { Component } from "react";
import CommentBox from "../../components/CommentBox";
import TribeProfile from "../../components/TribeProfile";

export default class Tribepage extends Component {
  render() {
    return (
      <div className="container">
        <TribeProfile />
        <CommentBox />
      </div>
    );
  }
}
