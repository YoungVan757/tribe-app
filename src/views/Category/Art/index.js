import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Art extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        
        <div className="explore__container">
        <h2>Art</h2>
        <Link to="/category/art/visual" className="category-item blue">Visual</Link>
        <Link to="/category/art/music" className="category-item yellow">Music</Link>
        <Link to="/category/art/cinema" className="category-item red">Cinema</Link>
        <Link to="/category/art/literature" className="category-item green">Literature</Link>
        <Link to="/category/art/video-games" className="category-item orange">Video Games</Link>
        <Link to="/categories/" className="category-item purple">Back</Link></div>
      </div>
    );
  }
}
