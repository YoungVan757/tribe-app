import React, { Component } from 'react';

import Art from './Art';
import Sports from './Sports';
import Politics from './Politics';
import Geography from './Geography';
import Nature from './Nature';
import Manufactured from './Manufactured';

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

    if (categoryName === 'politics') {
      return <Politics />;
    }

    if (categoryName === 'geography') {
      return <Geography />;
    }

    if (categoryName === 'nature') {
      return <Nature />;
    }

    if (categoryName === 'manufactured') {
      return <Manufactured />;
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
