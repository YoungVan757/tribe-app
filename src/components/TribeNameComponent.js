import React, { Component } from 'react';
import TribeName from './TribeName';
import Headline from './Headline';
import firebase from '../firebase';

export default class TribeNameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tribes:'',
            members: ''
        };
      }

    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        firebase
          .database()
          .ref('/tribes')
          .once("value")
          .then(snapshot => {
            const tribes = snapshot.val();
            this.setState({
              tribes
            });
          });
      }
    render() {
        return (
            <div className="name__container">
                {this.props.tribeName} <br/>
               <span>{this.props.headLine} <br/>
                {this.state.members.length} members so far</span> 
            </div>
        );
    }
}