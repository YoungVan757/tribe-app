import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Visual extends Component {
  render() {
    return <div>Visual<br></br>
    <Link to="/category/art">Back</Link></div>;
  }
}
