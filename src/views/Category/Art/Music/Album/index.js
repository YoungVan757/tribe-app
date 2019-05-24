import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Album extends Component {
  render() {
    return <div className="explore__container">
    <h2>Album</h2>
    <Link to="/category/art/music" className="category-item blue">Back</Link></div>;
  }
}
