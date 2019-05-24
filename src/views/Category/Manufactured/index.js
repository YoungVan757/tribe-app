import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Manufactured extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="explore__container">
        <h2>Manufactured</h2>
        <Link to="/category/manufactured/instrument" className="category-item blue">Instrument</Link>
        <Link to="/category/manufactured/automobile" className="category-item yellow">Automobile</Link>
        <Link to="/categories" className="category-item red">Back</Link>
        </div>
      </div>
    );
  }
}
