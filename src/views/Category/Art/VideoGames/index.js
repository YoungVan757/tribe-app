import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class VideoGames extends Component {
  render() {
    return <div className="explore__container">
    <h2>Video Games</h2>
    <Link to="/category/art/video-games/game" className="category-item blue">Game</Link>
    <Link to="/category/art" className="category-item yellow">Back</Link></div>;
  }
}
