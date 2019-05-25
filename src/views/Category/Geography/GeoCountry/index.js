import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GeoCountry extends Component {
  render() {
    return <div className="explore__container">
    <h2>Country</h2>
    <Link to="category/geography/geocountry/state-province" className="category-item blue">State/Province</Link>
    <Link to="/category/geography" className="category-item yellow">Back</Link></div>;
  }
}
