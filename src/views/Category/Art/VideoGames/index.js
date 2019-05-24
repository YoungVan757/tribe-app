import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VideoGames extends Component {
  render() {
    return <div>VideoGames<br></br>
    <Link to="/category/art">Back</Link></div>;
  }
}
