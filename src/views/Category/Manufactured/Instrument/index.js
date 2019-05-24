import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Instrument extends Component {
  render() {
    return <div>
    Instrument<br></br>
    <Link to="/category/manufactured">Back</Link></div>;
  }
}