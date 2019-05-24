import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Geography extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="explore__container">
        <h2>Geography</h2>
        <Link to="/category/geography/geocountry" className="category-item blue">Country</Link>
        <Link to="/categories" className="category-item yellow">Back</Link>
      </div>
      </div>
    );
  }
}
