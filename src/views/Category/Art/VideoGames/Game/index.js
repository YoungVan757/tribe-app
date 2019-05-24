import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VideoGames extends Component {
  render() {
    return <div className="explore__container">
    <h2>Games</h2>
    <Link to="/category/art/video-games" className="category-item yellow">Back</Link></div>;
  }
}
