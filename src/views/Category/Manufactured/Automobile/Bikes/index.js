import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Bikes extends Component {
  render() {
    return <div className="explore__container">
    <h2>Bikes</h2>
    <Link to="/category/manufactured/automobile" className="category-item blue">Back</Link></div>;
  }
}
