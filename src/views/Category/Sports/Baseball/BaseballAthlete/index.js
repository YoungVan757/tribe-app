import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseballAthlete extends Component {
  render() {
    return <div className="explore__container">
    <h2>Baseball Athlete</h2>
    <Link to="/category/sports/baseball" className="category-item blue">Back</Link></div>;
  }
}