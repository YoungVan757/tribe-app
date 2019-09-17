import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase';

export default class TribeImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tribe: '',
            tribes: [],
            uid: '',
            users: []
        }
    }

    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        const uid = window.localStorage.getItem("tribe_uid");
        firebase
          .database()
          .ref(`/users/${uid}/tribes`)
          .once("value")
          .then(snapshot => {
            const users = snapshot.val();
            this.setState({
              users
            });
          });
      }

      renderTribes() {
        const users =
          this.state.users &&
          Object.keys(this.state.users).map(k => {
            const singleTribe = this.state.users[k];
            return (
              <div className={this.props.classN}>
              <Link to={`${this.props.match.params.subSubsubcategory}`}>
               <img alt='tribe' src={singleTribe.url}></img> </Link>
              </div>
            );
          });
        return users;
      }

      render(){
          return (
              <div className='tribes'>{this.renderTribes()}</div>
          )
      }}