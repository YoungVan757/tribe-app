import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Basketball extends Component {
  render() {
    return <div className="explore__container">
    <h2>Basketball</h2>
    <Link to="/category/sports/baseball/basketball-team" className="category-item blue">Team</Link>
    <Link to="/category/sports/baseball/basketball-athlete" className="category-item yellow">Athlete</Link>
    <Link to="/category/sports/" className="category-item red">Back</Link></div>;
  }
}
