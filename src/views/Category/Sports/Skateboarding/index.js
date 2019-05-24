import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Skateboarding extends Component {
  render() {
    return <div>
    Skateboarding<br></br>
    <Link to="/category/sports">Back</Link>
    </div>;
  }
}
