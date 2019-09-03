import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EditPage extends Component {
  render() {
    return (
      <div className="backyard">
        Edit Page
        <div className="settings">
          <Link to="/settings/editpage/ChangeName" className="heading__blue">
            Name
          </Link>
          <div className="heading__yellow">Email</div>
          <br />
          <div className="heading__green">Photo</div>
          <br />
          <Link to="/settings" className="heading__orange">
            Back
          </Link>
          <br />
        </div>
      </div>
    );
  }
}
