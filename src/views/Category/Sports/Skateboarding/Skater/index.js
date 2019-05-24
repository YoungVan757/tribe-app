import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Skater extends Component {
  render() {
    return <div className="explore__container">
    <h2>Skater</h2>
    <Link to="/category/sports/skateboarding" className="category-item blue">Back</Link></div>;
  }
}
