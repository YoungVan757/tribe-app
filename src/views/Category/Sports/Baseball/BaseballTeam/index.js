import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseballTeam extends Component {
  render() {
    return <div className="explore__container">
    <h2>Baseball Team</h2>
    <Link to="/category/sports/baseball" className="category-item blue">Back</Link></div>;
  }
}
