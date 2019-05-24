import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BasketballAthlete extends Component {
  render() {
    return <div className="explore__container">
    <h2>Basketball Athlete</h2>
    <Link to="/category/sports/basketball" className="category-item blue">Back</Link></div>;
  }
}
