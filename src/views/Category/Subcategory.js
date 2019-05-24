import React, { Component } from 'react';

// ART SUBCATEGORY
import Music from './Art/Music';
import Visual from './Art/Visual';
import Cinema from './Art/Cinema';
import Literature from './Art/Literature';
import VideoGames from './Art/VideoGames';

// SPORT SUBCATEGORY

import Skateboarding from './Sports/Skateboarding';
import AmericanFootball from './Sports/AmericanFootball';
import Basketball from './Sports/Basketball';
import Baseball from './Sports/Baseball';
import Football from './Sports/Football';

// POLITICS SUBCATEGORY

import PoliCountry from './Politics/PoliCountry';

// GEOGRAPHY SUBCATEGORY

import GeoCountry from './Geography/GeoCountry';

// NATURE SUBCATEGORY

import Plant from './Nature/Plant';
import Animal from './Nature/Animal';
import Fungi from './Nature/Fungi';
import Insect from './Nature/Insect';
import Mineral from './Nature/Mineral';

// MANUFACTURED SUBCATEGORY

import Instrument from './Manufactured/Instrument';
import Automobile from './Manufactured/Automobile';

export default class Subcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubCategoryDetails(categoryName) {

    // ART 

    if (categoryName === 'visual') {
      return <Visual />;
    }

    if (categoryName === 'music') {
      return <Music />;
    }

    if (categoryName === 'cinema') {
      return <Cinema />;
    }

    if (categoryName === 'literature') {
      return <Literature />;
    }

    if (categoryName === 'video-games') {
      return <VideoGames />;
    }

    // SPORTS

    if (categoryName === 'skateboarding') {
      return <Skateboarding />;
    }

    if (categoryName === 'american-football') {
      return <AmericanFootball />;
    }

    if (categoryName === 'basketball') {
      return <Basketball />;
    }

    if (categoryName === 'football') {
      return <Football />;
    }

    if (categoryName === 'baseball') {
      return <Baseball />;
    }

    // Politics

    if (categoryName === 'policountry') {
      return <PoliCountry />;
    }

    // Geography

    if (categoryName === 'geocountry') {
      return <GeoCountry />;
    }

    // Nature

    if (categoryName === 'plant') {
      return <Plant />;
    }

    if (categoryName === 'animal') {
      return <Animal />;
    }

    if (categoryName === 'fungi') {
      return <Fungi />;
    }

    if (categoryName === 'insect') {
      return <Insect />;
    }

    if (categoryName === 'mineral') {
      return <Mineral />;
    }

    // Manufactured

    if (categoryName === 'instrument') {
      return <Instrument />;
    }

    if (categoryName === 'automobile') {
      return <Automobile />;
    }

  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <h1>
          You are on{' '}
          {`/category/${this.props.match.params.categoryName}/${this.props.match.params.subCategory}`}{' '} Page
        </h1>
        {this.renderSubCategoryDetails(this.props.match.params.subCategory)}
      </div>
    );
  }
}
