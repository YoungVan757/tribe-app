import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Boutiques extends Component {
  render() {
    return <div className="explore__container">
    <h2>Boutiques</h2>
    <Link to="/category/geography/geocountry/state-province/city" className="category-item blue">Back</Link></div>;
  }
} 