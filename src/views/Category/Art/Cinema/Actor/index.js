import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Actor extends Component {
  render() {
    return <div className="explore__container">
    <h2>Actor</h2>
    <Link to="/category/art/cinema" className="category-item blue">Back</Link></div>;
  }
}
