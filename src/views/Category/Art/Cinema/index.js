import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Cinema extends Component {
  render() {
    return <div>
    Cinema<br></br>
    <Link to="/category/art">Back</Link>
    </div>;
  }
}
