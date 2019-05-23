import React, { Component } from 'react';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    console.log("category props")
    return (
      <div>
        <h1>The {this.props.match.params.categoryName} Category Page</h1>
      </div>
    );
  }
}
