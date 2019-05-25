import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Fashion extends Component {
  render() {
    return <div className="explore__container">
    <h2>Fashion</h2>
    <Link to="/category/art/visual" className="category-item blue">Back</Link></div>;
  }
}
