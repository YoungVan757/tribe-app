import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class EditPage extends Component {
    render() {
        return (
            <div className="backyard">
                Edit Page
                <div class="settings">
                <div class="heading__blue">Name</div>
                <div class="heading__yellow">Email</div><br></br>
                <div class="heading__red">Password</div><br></br>
                <div class="heading__green">Photo</div><br></br>
                <Link to="/settings" className="heading__orange">Back</Link><br></br>
                <div class="heading__purple">Block</div><br></br>
          </div>
            </div>
        )
    }
}