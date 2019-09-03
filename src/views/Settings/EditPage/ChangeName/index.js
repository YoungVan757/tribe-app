import React, {Component} from 'react';
import Input from '../../../../components/Input';
import {Link, Redirect } from 'react-router-dom';
import firebase from '../../../../firebase';

export default class ChangeName extends Component {
    constructor(props) {
        super(props) ;
        this.state={
            users: [],
            uid: '',
            username:''
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        const uid = window.localStorage.getItem("tribe_uid");
        firebase
          .database()
          .ref(`/users/${uid}/`)
          .once("value")
          .then(snapshot => {
            const users = snapshot.val();
            this.setState({
              users
            });
          });
      }

      changeName() {
        const database = firebase.database();
        const username = window.localStorage.getItem("tribe_username");
        const uid = window.localStorage.getItem("tribe_uid");
    
        const databaseSet = {};
    
        databaseSet[
          `/users/${uid}/username/`
        ] = this.state.username;
    
        database
          .ref()
          .update(databaseSet)
          .then(() => {
            window.localStorage.setItem('tribe_username', username);
            this.fetchData();
          });
          return <Redirect to={`/settings/editpage`} />;
      }

    render() {
        return (<div className='backyard'>
            <h1 style={{color:'white'}}>Type new username then click the button</h1>
            <Input 
                onChange={e => this.setState({ username: e.target.value })}
                type="text"
                placeholder="Type new username please"
            />
            <button
                className='board__post'
                onClick={() => this.changeName()}
                title="Change Username"
            >Change Username</button>
        </div>)
    }
}