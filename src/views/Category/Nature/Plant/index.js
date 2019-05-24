import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Plant extends Component {
  render() {
    return <div>Plant
    <Link to="/category/nature">Back</Link></div>;
  }
}
