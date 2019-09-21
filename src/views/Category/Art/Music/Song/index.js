import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Song extends Component {
  render() {
    return <div className="explore__container">
    <h2>Song</h2>
    <Link to="/category/art/music/song/oogumboogum" className="category-item blue">Oogum Boogum</Link>
    <Link to="/category/art/music" className="category-item gold">Back</Link>
    </div>;
  }
}