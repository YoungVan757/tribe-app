import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AmericanFootball extends Component {
  render() {
    return <div className="explore__container">
    <h2>American Football</h2>
    <Link to="/category/sports/american-football/american-football-team" className="category-item blue">Team</Link>
    <Link to="/category/sports/american-football/american-football-athlete" className="category-item yellow">Athlete</Link>
    <Link to="/category/sports/" className="category-item red">Back</Link></div>;
  }
}
