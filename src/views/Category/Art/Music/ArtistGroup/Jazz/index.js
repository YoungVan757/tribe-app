import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Jazz extends Component {
  render() {
    return <div className="explore__container">
    <h2>Jazz</h2>
    <Link to="/category/art/music" className="category-item blue">Back</Link></div>;
  }
} 