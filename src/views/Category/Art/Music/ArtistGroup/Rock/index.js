import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rock extends Component {
  render() {
    return <div className="explore__container">
    <h2>Rock</h2>
    <Link to="/category/art/music" className="category-item blue">Back</Link></div>;
  }
} 