import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Mineral extends Component {
  render() {
    return <div>Mineral
    <Link to="/category/nature">Back</Link></div>;
  }
}
