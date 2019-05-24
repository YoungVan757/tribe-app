import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <div className="explore__container">
          <Link to="/category/art" className="category-item blue">
            Art
          </Link>
          <Link to="/category/sports" className="category-item yellow">
            Sports
          </Link>
          <Link to="/category/politics" className="category-item red">
            Politics
          </Link>
          <Link to="/category/geography" className="category-item green">
            Geography
          </Link>
          <Link to="/category/nature" className="category-item orange">
            Nature
          </Link>
          <Link to="/category/manufactured" className="category-item purple">
            Manufactured
          </Link>
        </div>
      </div>
    );
  }
}
