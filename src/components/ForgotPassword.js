import React, { Component } from 'react';
import FormField from './FormField';
import Button from './Button';
import {Link} from 'react-router-dom';

export default class ForgotPassword extends Component {
    render() {
        return(
            <div className="container">
                <div className="backyard">
                    <FormField title="email" />
                    <Button title="submit" />
                    <Link to="/" className="link">Back Home</Link>
                </div>
            </div>
        )
    }
}