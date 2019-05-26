import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class City extends Component {
  render() {
    return <div className="explore__container">
    <h2>City</h2>
    <Link to="/category/geography/geocountry/state-province/city/artists" className="category-item blue">Artists</Link>
    <Link to="/category/geography/geocountry/state-province/city/boutiques" className="category-item yellow">Boutiques</Link>
    <Link to="/category/geography/geocountry/state-province/city/parks" className="category-item red">Parks</Link>
    <Link to="/category/geography/geocountry/state-province/city/restaurants" className="category-item green">Restaurants</Link>
    <Link to="/category/geography/geocountry/state-province" className="category-item orange">Back</Link></div>;
  }
} 