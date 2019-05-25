import React, { Component } from 'react';

// ART/VISUAL/3D SUBSUBSUBCATEGORY
import Fashion from './Art/Visual/ThreeD/Fashion';
// ART/VISUAL/2D SUBSUBSUBCATEGORY
import Comics from './Art/Visual/TwoD/Comics';

// ART/MUSIC/ARTISTGROUP SUBSUBCATEGORY
import Rock from './Art/Music/ArtistGroup/Rock';
import HipHop from './Art/Music/ArtistGroup/HipHop';
import Pop from './Art/Music/ArtistGroup/Pop';
import Jazz from './Art/Music/ArtistGroup/Jazz';
import Blues from './Art/Music/ArtistGroup/Blues';

// GEOGRAPHY/COUNTRY/STATE-PROVINCE SUBSUBCATEGORY
import City from './Geography/GeoCountry/StateProvince/City';

// MANUFACTURED/AUTOMOBILE/CARS SUBSUBCATEGORY
import CarManufacturer from './Manufactured/Automobile/Cars/CarManufacturer';

// MANUFACTURED/AUTOMOBILE/TRUCKS SUBSUBCATEGORY
import TruckManufacturer from './Manufactured/Automobile/Trucks/TruckManufacturer';

// MANUFACTURED/AUTOMOBILE/BIKES SUBSUBCATEGORY
import BikeManufacturer from './Manufactured/Automobile/Bikes/BikeManufacturer';

export default class Subsubsubcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubsubsubcatagoryDetails(subSubsubcategory) {

    // ART / VISUAL / 3D

    if (subSubsubcategory === 'fashion') {
      return <Fashion />;
    }

    // ART / VISUAL / 2D

    if (subSubsubcategory === 'comics') {
      return <Comics />;
    }

    // ART / MUSIC / ARTIST-GROUP

    if (subSubsubcategory === 'rock') {
      return <Rock />;
    }

    if (subSubsubcategory === 'hiphop') {
      return <HipHop />;
    }

    if (subSubsubcategory === 'pop') {
      return <Pop />;
    }
    
    if (subSubsubcategory === 'jazz') {
        return <Jazz />;
      }
    
    if (subSubsubcategory === 'blues') {
      return <Blues />;
    }

    // GEOGRAPHY / COUNTRY / STATE-PROVINCE

    if (subSubsubcategory === 'city') {
        return <City />;
      }

    // MANUFACTURED / AUTOMOBILE / CARS

    if (subSubsubcategory === 'carmanufacturer') {
        return <CarManufacturer />;
      }

    // MANUFACTURED / AUTOMOBILE / TRUCKS

    if (subSubsubcategory === 'truckmanufacturer') {
      return <TruckManufacturer />;
    }

    // MANUFACTURED / AUTOMOBILE / BIKES

    if (subSubsubcategory === 'bikemanufacturer') {
      return <BikeManufacturer />;
    }
    
  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        <label>Sub sub sub category</label>
        <h1>
          You are on{' '}
          {`/category/${this.props.match.params.categoryName}/${this.props.match.params.subCategory}
          /${this.props.match.params.subSubcategory}/${this.props.match.params.subSubsubcategory}`}{' '} Page
        </h1>
        {this.renderSubsubsubcatagoryDetails(this.props.match.params.subSubsubcategory)}
      </div>
    );
  }
}
