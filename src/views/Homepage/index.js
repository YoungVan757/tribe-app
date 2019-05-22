import React, { Component } from 'react';

import FormField from '../../components/FormField';
import Button from '../../components/Button';

export default class Homepage extends Component {
  render() {
    return (
      <div claasName="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="homepage__heading">Tribe</div>
              <FormField
                title="Email"
                inputType="text"
                color="gold"
                borderColor="gold"
              />
              <FormField
                title="Password"
                inputType="password"
                color="firebrick"
                borderColor="firebrick"
              />
            
              <Button title="Log In" color="darkgreen"/>

              <div className="homepage__or"> or</div>

              <Button title="Sign Up" color="slateblue"/>
          </div>
        </div>
      </div>
    );
  }
}
