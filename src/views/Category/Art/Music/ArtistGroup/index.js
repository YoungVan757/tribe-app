import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArtistGroup extends Component {
  render() {
    return <div className="explore__container">
    <h2>Artist/Group</h2>

    <Link to="/category/art/music/artist-group/rock" className="category-item blue">Rock</Link>
    <Link to="/category/art/music/artist-group/pop" className="category-item yellow">Pop</Link>
    <Link to="/category/art/music/artist-group/hiphop" className="category-item red">Hip Hop</Link>
    <Link to="/category/art/music/artist-group/jazz" className="category-item green">Jazz</Link>
    <Link to="/category/art/music/artist-group/blues" className="category-item orange">Blues</Link>
    <Link to="/category/art/music" className="category-item purple">Back</Link></div>;
  }
} 