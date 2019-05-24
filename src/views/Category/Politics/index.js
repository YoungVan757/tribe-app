import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Politics extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="explore__container">
        <h1>Politics</h1>
        <Link to="/category/politics/policountry" className="category-item blue">Country</Link>
        <Link to="/categories" className="category-item yellow">Back</Link>
        </div>
      </div>
    );
  }
}
