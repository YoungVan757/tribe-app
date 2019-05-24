import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Literature extends Component {
  render() {
    return <div className="explore__container">
    <h2>Literature</h2>
    <Link to="/category/art/cinema/author" className="category-item blue">Author</Link>
    <Link to="/category/art/cinema/book" className="category-item yellow">Book</Link>
    <Link to="/category/art" className="category-item red">Back</Link></div>;
  }
}
