import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Plant extends Component {
  render() {
    return <div className="explore__container">
    <h2>Plant</h2>
    <Link to="/category/nature/" className="category-item blue">Back</Link></div>;
  }
}
