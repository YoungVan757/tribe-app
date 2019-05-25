import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        
        <div className="explore__container">
        <h2>Art</h2>
        <Link to="/category/art/cinema/actor" className="category-item blue">Actor</Link>
        <Link to="/category/art/cinema/director" className="category-item yellow">Director</Link>
        <Link to="/category/art/cinema/film" className="category-item red">Film</Link>
        <Link to="/category/art/cinema/series" className="category-item orange">Series</Link>
        <Link to="/category/art" className="category-item green">Back</Link></div>
      </div>
    );
  }
}
