import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AmericanFootball extends Component {
  render() {
    return <div>
    American Football<br></br>
    <Link to="/category/sports">Back</Link>
    </div>;
  }
}
