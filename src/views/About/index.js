import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from './styles';

export default class About extends Component {
    render() {
      return <div className="backyard">
      <Heading>Tribe is app to find your tribe</Heading>
      <Link to="/settings" className="heading__orange">Back</Link><br></br>
      </div>;
    }
  }
