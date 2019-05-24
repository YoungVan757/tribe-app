import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Fungi extends Component {
  render() {
    return <div>Fungi
    <Link to="/category/nature">Back</Link></div>;
  }
}
