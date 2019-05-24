import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Visual extends Component {
  render() {
    return <div className="explore__container">
    <h2>Visual Art</h2>
    <Link to="/category/art/visual/threed" className="category-item blue">3D</Link>
    <Link to="/category/art/visual/twod" className="category-item yellow">2D</Link>
    <Link to="/category/art" className="category-item red">Back</Link></div>;
  }
}
