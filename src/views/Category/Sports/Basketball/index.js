import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Basketball extends Component {
  render() {
    return <div>
    Basketball<br></br>
    <Link to="/category/sports">Back</Link>
    </div>;
  }
}
