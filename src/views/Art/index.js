import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div>
        <h1>The {this.props.match.params.categoryName} Category Page</h1>
        <Link to="/visual/index">Visual</Link>
        <Link>Music</Link>
        <Link>Cinema</Link>
        <Link>Literature</Link>
        <Link>Video Games</Link>
      </div>
    );
  }
}
