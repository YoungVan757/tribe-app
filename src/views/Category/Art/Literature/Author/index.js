import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Author extends Component {
  render() {
    return <div className="explore__container">
    <h2>Author</h2>
    <Link to="/category/art/literature" className="category-item blue">Back</Link></div>;
  }
}
