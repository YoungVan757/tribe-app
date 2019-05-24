import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FootballAthlete extends Component {
  render() {
    return <div className="explore__container">
    <h2>Football Athlete</h2>
    <Link to="/category/sports/football" className="category-item blue">Back</Link></div>;
  }
}
