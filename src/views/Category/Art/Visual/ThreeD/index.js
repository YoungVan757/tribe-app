import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ThreeD extends Component {
  render() {
    return <div className="explore__container">
    <h2>3D Art</h2>
    <Link to="/category/art/visual/threed/fashion" className="category-item blue">Fashion</Link>
    <Link to="/category/art/visual" className="category-item yellow">Back</Link></div>;
  }
}
