import React, { Component } from "react";
import TribeImg from "./TribeImg";

export default class Tribe extends Component {
  render() {
    return (
      <div className="tribe">
        <div className="tribe__heading">Tribes</div>
          <TribeImg classN="atribe" />
      </div>
    );
  }
}
