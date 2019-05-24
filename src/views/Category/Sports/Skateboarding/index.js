import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Skateboarding extends Component {
  render() {
    return <div className="explore__container">
    <h2>Skateboarding</h2>
    <Link to="/category/sports/baseball/skater" className="category-item blue">Skater</Link>
    <Link to="/category/sports"className="category-item yellow">Back</Link>
    </div>;
  }
}
