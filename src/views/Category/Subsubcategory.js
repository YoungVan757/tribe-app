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

// ART/LITERATURE SUBSUBCATEGORY
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

// MANUFACTURED/INSTRUMENT SUBCATEGORY
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

  renderSubSubcatagoryDetails(subCategory) {

    // ART / VISUAL

    if (subCategory === 'threed') {
      return <ThreeD />;
    }

    if (subCategory === 'twod') {
      return <TwoD />;
    }

    // ART / MUSIC

    if (subCategory === 'artist-group') {
      return <ArtistGroup />;
    }

    if (subCategory === 'album') {
      return <Album />;
    }

    if (subCategory === 'song') {
      return <Song />;
    }
    
    // ART / CINEMA

    if (subCategory === 'director') {
      return <Director />;
    }

    if (subCategory === 'film') {
      return <Film />;
    }

    if (subCategory === 'series') {
      return <Series />;
    }

    if (subCategory === 'actor') {
      return <Actor />;
    }

    // ART / LITERATURE

    if (subCategory === 'author') {
      return <Author />;
    }

    if (subCategory === 'book') {
      return <Book />;
    }

    // ART / VIDEO GAME

    if (subCategory === 'game') {
      return <Game />;
    }

    // SPORTS / SKATEBOARDING

    if (subCategory === 'skater') {
      return <Skater />;
    }

    // SPORTS / AMERICANFOOTBALL

    if (subCategory === 'american-football-team') {
      return <AmericanFootballTeam />;
    }

    if (subCategory === 'american-football-athlete') {
      return <AmericanFootballAthlete />;
    }

    // SPORTS / BASKETBALL

    if (subCategory === 'basketball-team') {
      return <BasketballTeam />;
    }

    if (subCategory === 'basketball-athlete') {
      return <BasketballAthlete />;
    }

    // SPORTS / FOOTBALL

    if (subCategory === 'football-team') {
      return <FootballTeam />;
    }

    if (subCategory === 'football-athlete') {
      return <FootballAthlete />;
    }

    // SPORTS / BASEBALL

    if (subCategory === 'baseball-team') {
      return <BaseballTeam />;
    }

    if (subCategory === 'baseball-athlete') {
      return <BaseballAthlete />;
    }

    // MANUFACTURED / INSTRUMENT

    if (subCategory === 'manufacturer') {
      return <Manufacturer />;
    }

    // MANUFACTURED / AUTOMOBILE

    if (subCategory === 'cars') {
      return <Cars />;
    }

    if (subCategory === 'trucks') {
      return <Trucks />;
    }

    if (subCategory === 'bikes') {
      return <Bikes />;
    }
    
  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <h1>
          You are on{' '}
          {`/category/${this.props.match.params.categoryName}/${this.props.match.params.subCategory}
          /${this.props.match.params.subSubcategory}`}{' '} Page
        </h1>
        {this.renderSubSubcatagoryDetails(this.props.match.params.subSubcategory)}
      </div>
    );
  }
}
