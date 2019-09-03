import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ArtistGroup extends Component {
  render() {
    return <div className="explore__container">
    <h2>Artist/Group</h2>

    <Link to="/category/art/music/artist-group/grouper" className="category-item blue">Grouper</Link>
    <Link to="/category/art/music/artist-group/sandovalhope" className="category-item yellow">Hope Sandoval</Link>
    <Link to="/category/art/music/artist-group/dame" className="category-item red">Dame</Link>
    <Link to="/category/art/music/artist-group/juliedoiron" className="category-item green">Julie Doiron</Link>
    <Link to="/category/art/music" className="category-item purple">Back</Link></div>;
  }
} 