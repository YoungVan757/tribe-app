import React, { Component } from 'react';

// ART/VISUAL SUBSUBCATEGORY
import ThreeD from './Art/Visual/ThreeD';
import TwoD from './Art/Visual/TwoD';

// ART/MUSIC SUBSUBCATEGORY
import ArtistGroup from './Art/Music/ArtistGroup';
import Album from './Art/Music/Album';
import Song from './Art/Music/Song';

// ART/CINEMA SUBSUBCATEGORY
import Director from './Art/Cinema/Director';
import Film from './Art/Cinema/Film';
import Series from './Art/Cinema/Series';
import Actor from './Art/Cinema/Actor';

// ART/LITERATURE SUBSUBCATEGORY
import Author from './Art/Literature/Author';
import Book from './Art/Literature/Book';

// ART/VIDEOGAMES SUBSUBCATEGORY
import Game from './Art/VideoGames/Game';

// SPORT/SKATEBOARDING SUBSUBCATEGORY
import Skater from './Sports/Skateboarding/Skater';

// SPORT/AMERICANFOOTBALL SUBSUBCATEGORY
import AmericanFootballTeam from './Sports/AmericanFootball/AmericanFootballTeam';
import AmericanFootballAthlete from './Sports/AmericanFootball/AmericanFootballAthlete';

// SPORT/BASKETBALL SUBSUBCATEGORY
import BasketballTeam from './Sports/Basketball/BasketballTeam';
import BasketballAthlete from './Sports/Basketball/BasketballAthlete';

// SPORT/FOOTBALL SUBSUBCATEGORY
import FootballTeam from './Sports/Football/FootballTeam';
import FootballAthlete from './Sports/Football/FootballAthlete';

// SPORT/BASEBALL SUBSUBCATEGORY
import BaseballTeam from './Sports/Baseball/BaseballTeam';
import BaseballAthlete from './Sports/Baseball/BaseballAthlete';

// GEOGRAPHY/COUNTRY SUBSUBCATEGORY
import StateProvince from './Geography/GeoCountry/StateProvince';

// MANUFACTURED/INSTRUMENT SUBSUBCATEGORY
import Manufacturer from './Manufactured/Instrument/Manufacturer';

// MANUFACTURED/AUTOMOBILE SUBCATEGORY
import Cars from './Manufactured/Automobile/Cars';
import Trucks from './Manufactured/Automobile/Trucks';
import Bikes from './Manufactured/Automobile/Bikes';

export default class Subsubcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubsubcatagoryDetails(subSubcategory) {

    // ART / VISUAL

    if (subSubcategory === 'threed') {
      return <ThreeD />;
    }

    if (subSubcategory === 'twod') {
      return <TwoD />;
    }

    // ART / MUSIC

    if (subSubcategory === 'artist-group') {
      return <ArtistGroup />;
    }

    if (subSubcategory === 'album') {
      return <Album />;
    }

    if (subSubcategory === 'song') {
      return <Song />;
    }
    
    // ART / CINEMA

    if (subSubcategory === 'director') {
      return <Director />;
    }

    if (subSubcategory === 'film') {
      return <Film />;
    }

    if (subSubcategory === 'series') {
      return <Series />;
    }

    if (subSubcategory === 'actor') {
      return <Actor />;
    }

    // ART / LITERATURE

    if (subSubcategory === 'author') {
      return <Author />;
    }

    if (subSubcategory === 'book') {
      return <Book />;
    }

    // ART / VIDEO GAME

    if (subSubcategory === 'game') {
      return <Game />;
    }

    // SPORTS / SKATEBOARDING

    if (subSubcategory === 'skater') {
      return <Skater />;
    }

    // SPORTS / AMERICANFOOTBALL

    if (subSubcategory === 'american-football-team') {
      return <AmericanFootballTeam />;
    }

    if (subSubcategory === 'american-football-athlete') {
      return <AmericanFootballAthlete />;
    }

    // SPORTS / BASKETBALL

    if (subSubcategory === 'basketball-team') {
      return <BasketballTeam />;
    }

    if (subSubcategory === 'basketball-athlete') {
      return <BasketballAthlete />;
    }

    // SPORTS / FOOTBALL

    if (subSubcategory === 'football-team') {
      return <FootballTeam />;
    }

    if (subSubcategory === 'football-athlete') {
      return <FootballAthlete />;
    }

    // SPORTS / BASEBALL

    if (subSubcategory === 'baseball-team') {
      return <BaseballTeam />;
    }

    if (subSubcategory === 'baseball-athlete') {
      return <BaseballAthlete />;
    }

    // GEOGRAPHY / COUNTRY

    if (subSubcategory === 'state-province') {
      return <StateProvince />;
    }

    // MANUFACTURED / INSTRUMENT

    if (subSubcategory === 'manufacturer') {
      return <Manufacturer />;
    }

    // MANUFACTURED / AUTOMOBILE

    if (subSubcategory === 'cars') {
      return <Cars />;
    }

    if (subSubcategory === 'trucks') {
      return <Trucks />;
    }

    if (subSubcategory === 'bikes') {
      return <Bikes />;
    }
    
  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <h1>
          You are on{' '}
          {`/category/${this.props.match.params.categoryName}/
          ${this.props.match.params.subCategory}/
          ${this.props.match.params.subSubcategory}`}{' '} Page
        </h1>
        {this.renderSubsubcatagoryDetails(this.props.match.params.subSubcategory)}
      </div>
    );
  }
}
