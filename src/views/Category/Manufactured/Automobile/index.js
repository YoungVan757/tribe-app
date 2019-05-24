import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Automobile extends Component {
  render() {
    return <div className="explore__container">
    <h2>Automobile</h2>
    <Link to="/category/manufactured/automobile/cars" className="category-item blue">Cars</Link>
    <Link to="/category/manufactured/automobile/trucks" className="category-item yellow">Trucks</Link>
    <Link to="/category/manufactured/automobile/bikes" className="category-item red">Bikes</Link>
    <Link to="/category/manufactured" className="category-item green">Back</Link></div>;
  }
}
