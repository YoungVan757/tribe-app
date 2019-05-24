import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class FootballTeam extends Component {
  render() {
    return <div className="explore__container">
    <h2>Football Team</h2>
    <Link to="/category/sports/football" className="category-item blue">Back</Link></div>;
  }
}
