import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';


export default class DeletePage extends Component {
    render() {
        return (
            <div className="backyard">
                Delete Page
                <FormField >submit email to delete account</FormField>
                <Link to="/settings" className="heading__orange">Back to Settings</Link>
            </div>
        )
    }
}