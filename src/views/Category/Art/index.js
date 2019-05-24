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
        <h1>Art Links</h1>
        <Link to="/category/art/visual">Visual</Link>
        <Link to="/category/art/music">Music</Link>
        <Link to="/category/art/cinema">Cinema</Link>
        <Link to="/category/art/literature">Literature</Link>
        <Link to="/category/art/video-games">Video Games</Link>
      </div>
    );
  }
}
