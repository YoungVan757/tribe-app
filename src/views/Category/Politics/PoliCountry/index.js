import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PoliCountry extends Component {
  render() {
    return <div>
    Country<br></br>
    <Link to="/category/politics">Back</Link></div>;
  }
}
