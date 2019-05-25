import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Instrument extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <div className="explore__container">
    <h2>Insrument</h2>
    <Link to="/category/manufactured/instrument/manufacturer" className="category-item blue">Manufacturer</Link>
    <Link to="/category/manufactured" className="category-item yellow">Back</Link></div>;
  }
}
