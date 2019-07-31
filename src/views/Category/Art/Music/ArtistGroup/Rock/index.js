import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Rock extends Component {
    constructor(props) {
      super(props);
      this.state={}
    }

    
  render() {
    
    return <div className="explore__container">
    <h2>Rock</h2>
    <Link to="/category/art/music/rock/grouper" 
    className="category-item blue">Grouper</Link>
    <Link to="/category/art/music/rock/hope_sandoval" 
    className="category-item yellow">Hope Sandoval</Link>
    <Link to="/category/art/music/rock/julie_doiron" 
    className="category-item red">Julie Doiron</Link>
    <Link to="/category/art/music" 
    className="category-item green">Back</Link></div>;
  }
} 