import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class DeletePage extends Component {
    render() {
        return (
            <div className="backyard">
                Delete Page
                <Link to="/settings" className="heading__orange">Back to Settings</Link>
            </div>
        )
    }
}