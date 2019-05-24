import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Football extends Component {
  render() {
    return <div>
    Football<br></br>
    <Link to="/category/sports">Back</Link>
    </div>;
  }
}
