import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class GeoCountry extends Component {
  render() {
    return <div>
    Country<br></br>
    <Link to="/category/geography">Back</Link>
    </div>;
  }
}
