import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Film extends Component {
  render() {
    return <div className="explore__container">
    <h2>Film</h2>
    <Link to="/category/art/cinema/film/cityofgod" className="category-item blue">City of God</Link>
    <Link to="/category/art/cinema" className="category-item gold">Back</Link></div>;
  }
}
