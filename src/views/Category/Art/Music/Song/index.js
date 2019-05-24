import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Song extends Component {
  render() {
    return <div className="explore__container">
    <h2>Song</h2>
    <Link to="/category/art/music" className="category-item blue">Back</Link></div>;
  }
}