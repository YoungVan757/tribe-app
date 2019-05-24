import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Visual extends Component {
  render() {
    return <div className="explore__container">
    <h2>Cinema</h2>
    <Link to="/category/art/cinema/director" className="category-item blue">Director</Link>
    <Link to="/category/art/cinema/film" className="category-item yellow">Film</Link>
    <Link to="/category/art/cinema/series" className="category-item red">Series</Link>
    <Link to="/category/art/cinema/actor" className="category-item green">Actor</Link>
    <Link to="/category/art" className="category-item orange">Back</Link></div>;
  }
}
