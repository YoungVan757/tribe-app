import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Music extends Component {
  render() {
    return <div className="explore__container">
    <h2>Music</h2>
    <Link to="/category/art/music/artist-group" className="category-item blue">Artist/Group</Link>
    <Link to="/category/art/music/album" className="category-item yellow">Album</Link>
    <Link to="/category/art/music/song" className="category-item red">Song</Link>
    <Link to="/category/art" className="category-item green">Back</Link></div>;
  }
}
