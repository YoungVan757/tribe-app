import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Manufacturer extends Component {
  render() {
    return <div className="explore__container">
    <h2>Manufacturer</h2>
    <Link to="/category/manufactured/instrument/" className="category-item blue">Back</Link></div>;
  }
}
