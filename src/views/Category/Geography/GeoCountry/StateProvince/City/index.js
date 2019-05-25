import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class City extends Component {
  render() {
    return <div className="explore__container">
    <h2>City</h2>
    <Link to="/category/geography/geocountry/state-province" className="category-item blue">Back</Link></div>;
  }
} 