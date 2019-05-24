import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Literature extends Component {
  render() {
    return <div>Literature<br></br>
    <Link to="/category/art">Back</Link>
    </div>;
  }
}
