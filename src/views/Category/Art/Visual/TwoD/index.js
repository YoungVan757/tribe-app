import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class TwoD extends Component {
  render() {
    return <div className="explore__container">
    <h2>2D Art</h2>
    <Link to="/category/art/visual/two/comics" className="category-item blue">Comics</Link>
    <Link to="/category/art/visual" className="category-item yellow">Back</Link></div>;
  }
}
