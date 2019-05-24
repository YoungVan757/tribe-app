import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AmericanFootballTeam extends Component {
  render() {
    return <div className="explore__container">
    <h2>American Football Team</h2>
    <Link to="/category/sports/american-football" className="category-item blue">Back</Link></div>;
  }
}
