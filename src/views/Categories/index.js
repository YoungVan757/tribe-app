import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Categories extends Component {
  render() {
    return (
      <div>
        <div className="explore__container">
          <Link to="/category/art" className="category-item bg--blue">
            Art
          </Link>
          <Link to="/category/sports" className="sports">
            Sports
          </Link>
          <Link to="/category/politics" className="politics">
            Politics
          </Link>
          <Link to="/category/geography" className="geo">
            Geography
          </Link>
          <Link to="/category/nature" className="nature">
            Nature
          </Link>
          <Link to="/category/manufactured" className="manu">
            Manufactured
          </Link>
        </div>
      </div>
    );
  }
}
