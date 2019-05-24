import React, { Component } from 'react';

// ART SUBCATEGORY
import Music from './Art/Music';
import VideoGames from './Art/VideoGames';

// SPORT SUBCATEGORY

export default class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubCategoryDetails(categoryName) {

    // ART 
    if (categoryName === 'music') {
      return <Music />;
    }

    if (categoryName === 'video-games') {
      return <VideoGames />;
    }

    // SPORTS
  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <h1>
          You are on{' '}
          {`/category/${this.props.match.params.categoryName}/${
            this.props.match.params.subCategory
          }`}{' '}
          Page
        </h1>
        {this.renderSubCategoryDetails(this.props.match.params.subCategory)}
      </div>
    );
  }
}
