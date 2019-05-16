import React, { Component } from 'react';

import FormField from '../../components/FormField';

export default class Signup extends Component {
  render() {
    return (
      <div>
        Signup
        <FormField title="Username" inputType="text" color="red" />
        <FormField title="Email" inputType="text" color="blue" />
        <FormField title="Password" inputType="password" color="yellow" />
      </div>
    );
  }
}
