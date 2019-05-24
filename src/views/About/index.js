import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class About extends Component {
    render() {
      return <div className="backyard">
      <div className="heading__blue">Tribe is app to find your tribe</div>
      <Link to="/settings" className="heading__orange">Back</Link><br></br>
      </div>;
    }
  }
