import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Director extends Component {
  render() {
    return <div className="explore__container">
    <h2>Director</h2>
    <Link to="/category/art/cinema/director/michaelhaneke" className="category-item blue">Michael Haneke</Link>
    <Link to="/category/art/cinema" className="category-item gold">Back</Link></div>;
  }
}
