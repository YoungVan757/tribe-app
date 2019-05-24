import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Insect extends Component {
  render() {
    return <div>Insect
    <Link to="/category/nature">Back</Link></div>;
  }
}
