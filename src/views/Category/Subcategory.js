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

  renderSubCategoryDetails(subCategory) {

    // ART 

    if (subCategory === 'visual') {
      return <Visual />;
    }

    if (subCategory === 'music') {
      return <Music />;
    }

    if (subCategory === 'cinema') {
      return <Cinema />;
    }

    if (subCategory === 'literature') {
      return <Literature />;
    }

    if (subCategory === 'video-games') {
      return <VideoGames />;
    }

    // SPORTS

    if (subCategory === 'skateboarding') {
      return <Skateboarding />;
    }

    if (subCategory === 'american-football') {
      return <AmericanFootball />;
    }

    if (subCategory === 'basketball') {
      return <Basketball />;
    }

    if (subCategory === 'football') {
      return <Football />;
    }

    if (subCategory === 'baseball') {
      return <Baseball />;
    }

    // Politics

    if (subCategory === 'policountry') {
      return <PoliCountry />;
    }

    // Geography

    if (subCategory === 'geocountry') {
      return <GeoCountry />;
    }

    // Nature

    if (subCategory === 'plant') {
      return <Plant />;
    }

    if (subCategory === 'animal') {
      return <Animal />;
    }

    if (subCategory === 'fungi') {
      return <Fungi />;
    }

    if (subCategory === 'insect') {
      return <Insect />;
    }

    if (subCategory === 'mineral') {
      return <Mineral />;
    }

    // Manufactured

    if (subCategory === 'instrument') {
      return <Instrument />;
    }

    if (subCategory === 'automobile') {
      return <Automobile />;
    }

  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <label>This is subcategory.js</label>
        <h1>
          You are on{' '}
          {`/category/
          ${this.props.match.params.categoryName}/
          ${this.props.match.params.subCategory}`}{' '} Page
        </h1>
        {this.renderSubCategoryDetails(this.props.match.params.subCategory)}
      </div>
    );
  }
}
