import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Baseball extends Component {
  render() {
    return <div>
    Baseball<br></br>
    <Link to="/category/sports">Back</Link>
    </div>;
  }
}
