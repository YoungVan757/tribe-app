import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Automobile extends Component {
  render() {
    return <div>
    Automobile<br></br>
    <Link to="/category/manufactured">Back</Link></div>;
  }
}
