import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../../firebase';
import { WithAuth } from '../../../contexts/AuthContext';


class DeletePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            typedUsername: '',
            user: false
        }
    }
    componentDidMount() {
        this.fetchData();
      }
    
      fetchData() {
        firebase
          .database()
          .ref(`users`)
          .once("value")
          .then(snapshot => {
            const users = snapshot.val();
            this.setState({
              users
            });
          });
      }
   
deleteAccount() {
    const updates = {};
    const uid = window.localStorage.getItem("tribe_uid");
    const username = window.localStorage.getItem("tribe_username")
    if (this.state.typedUsername === username) {
        updates[`/users/${uid}`] = null;

        firebase
            .database()
            .ref()
            .update(updates)
            .then(()=>{
                this.fetchData();
            });
    }
}
    
    render() {
        const { user } = this.props.authContext;
        
        if (!user) {
            return <Redirect to="/" />;
          } return (
            <div className="backyard">
                <input
            className="form-field"
            id="emailInput"
            title="Email"
            type="email"
            style={{ color: 'gold' }}
            onChange={event => this.setState({ typedUsername: event.target.value })}
            placeholder="type username"
          />
          <button
            className="login__link"
            type="submit"
            onClick={() => this.deleteAccount()}
          >
            Delete Account
          </button>
                <Link to="/settings" className="heading__orange">Back to Settings</Link>
            </div>
          )
    }
}

export default WithAuth(DeletePage);