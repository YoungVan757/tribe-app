import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AmericanFootballAthlete extends Component {
  render() {
    return <div className="explore__container">
    <h2>American Football Athlete</h2>
    <Link to="/category/sports/american-football/athlete/odellbeckhamjr" className="category-item blue">Odell Beckham Jr</Link>
    <Link to="/category/sports/american-football" className="category-item gold">Back</Link></div>;
  }
}
