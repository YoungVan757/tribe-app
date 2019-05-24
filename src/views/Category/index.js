import React, { Component } from 'react';

import Art from './Art';
import Sports from './Sports';

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCategoryDetails(categoryName) {
    if (categoryName === 'art') {
      return <Art />;
    }

    if (categoryName === 'sports') {
      return <Sports />;
    }
  }

  render() {
    return (
      <div>
        <h1>The {this.props.match.params.categoryName} Category Page</h1>
        {this.renderCategoryDetails(this.props.match.params.categoryName)}
      </div>
    );
  }
}
