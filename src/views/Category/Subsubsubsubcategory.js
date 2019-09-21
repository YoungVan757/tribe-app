import React, { Component } from 'react';

// ART/VISUAL/3D/FASHION/RAILCAR SUBSUBSUBSUBCATEGORY


// GEOGRAPHY/COUNTRY/STATE-PROVINCE/CITY SUBSUBSUBSUBCATEGORY
import Artists from './Geography/GeoCountry/StateProvince/City/Artists';
import Boutiques from './Geography/GeoCountry/StateProvince/City/Boutiques';
import Parks from './Geography/GeoCountry/StateProvince/City/Parks';
import Restaurants from './Geography/GeoCountry/StateProvince/City/Restaurants';

export default class Subsubsubsubcategory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderSubsubsubsubcatagoryDetails(subSubsubsubcategory) {

    // ART / VISUAL / 3D / FASHION


    // GEOGRAPHY / COUNTRY / STATE-PROVINCE / CITY

    if (subSubsubsubcategory === 'parks') {
        return <Parks />;
      }
    if (subSubsubsubcategory === 'artists') {
        return <Artists />;
      }
    if (subSubsubsubcategory === 'boutiques') {
        return <Boutiques />;
      }
    if (subSubsubsubcategory === 'restaurants') {
        return <Restaurants />;
      } 
    
  }

  render() {
    console.log('subcategory prps', this.props);
    return (
      <div>
        {/* <h1>
          You are on{' '}
          {`/category/
          ${this.props.match.params.categoryName}/
          ${this.props.match.params.subCategory}/
          ${this.props.match.params.subSubcategory}/
          ${this.props.match.params.subSubsubcategory}/
          ${this.props.match.params.subSubsubsubcategory}`}{' '} Page
        </h1> */}
        {this.renderSubsubsubsubcatagoryDetails(this.props.match.params.subSubsubsubcategory)}
      </div>
    );
  }
}
