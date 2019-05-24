import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Nature extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="explore__container">
        <h2>Nature</h2>
        <Link to="/category/nature/plant" className="category-item blue">Plant</Link>
        <Link to="/category/nature/animal" className="category-item yellow">Animal</Link>
        <Link to="/category/nature/fungi" className="category-item red">Fungi</Link>
        <Link to="/category/nature/insect" className="category-item green">Insect</Link>
        <Link to="/category/nature/mineral" className="category-item orange">Mineral</Link>
        <Link to="/categories" className="category-item purple">Back</Link>
      </div>
      </div>
    );
  }
}
