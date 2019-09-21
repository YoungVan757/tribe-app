import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Book extends Component {
  render() {
    return <div className="explore__container">
    <h2>Book</h2>
    <Link to="/category/art/literature/book/monster" className="category-item blue">Monster</Link>
    <Link to="/category/art/literature" className="category-item gold">Back</Link></div>;
  }
}
