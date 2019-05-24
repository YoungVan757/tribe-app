import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Music extends Component {
  render() {
    return <div>Music<br></br>
    <Link to="/category/art">Back</Link></div>;
  }
}
