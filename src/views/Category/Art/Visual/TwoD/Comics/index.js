import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Comics extends Component {
  render() {
    return <div className="explore__container">
    <h2>Comics</h2>
    <Link to="/category/art/visual/twod" className="category-item blue">Back</Link></div>;
  }
}
