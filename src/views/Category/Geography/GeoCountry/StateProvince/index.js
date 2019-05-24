import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StateProvince extends Component {
  render() {
    return <div className="explore__container">
    <h2>State/Province</h2>
    <Link to="/category/geography/" className="category-item blue">Back</Link></div>;
  }
}
