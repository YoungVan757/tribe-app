import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class StateProvince extends Component {
  render() {
    return <div className="explore__container">
    <h2>State/Province</h2>
    <Link to="/category/geography/geocountry/state-province/city" className="category-item blue">City</Link>
    <Link to="/category/geography/geocountry" className="category-item yellow">Back</Link></div>;
  }
}
