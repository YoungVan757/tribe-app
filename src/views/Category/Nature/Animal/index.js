import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Animal extends Component {
  render() {
    return <div>Animal
    <Link to="/category/nature">Back</Link></div>;
  }
}
