import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Series extends Component {
  render() {
    return <div className="explore__container">
    <h2>Series</h2>
    <Link to="/category/art/cinema/series/peteandpete" className="category-item blue">Pete & Pete</Link>
    <Link to="/category/art/cinema" className="category-item gold">Back</Link></div>;
  }
}
