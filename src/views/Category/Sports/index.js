import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="explore__container">
        <h2>Sports</h2>
        <Link to="/category/sports/skateboarding" className="category-item blue">Skateboarding</Link>
        <Link to="/category/sports/american-football" className="category-item yellow">American Football</Link>
        <Link to="/category/sports/baseball" className="category-item red">Baseball</Link>
        <Link to="/category/sports/football" className="category-item green">Football</Link>
        <Link to="/category/sports/basketball" className="category-item orange">Basketball</Link>
        <Link to="/categories" className="category-item purple">Back</Link>
        </div>
      </div>
    );
  }
}
