import React, { Component } from 'react';

import FormField from '../../components/FormField';
import Button from '../../components/Button';

export default class Signup extends Component {
  render() {
    return (
      <div claasName="container">
        <div className="backyard">
          <div className="flex__container">
            <div className="heading">Sign Up</div>
              <FormField
                title="Username"
                inputType="text"
                color="gold"
                borderColor="blue"
              />
              <FormField
                title="Email"
                inputType="text"
                color="darkgreen"
                borderColor="firebrick"
              />
              <FormField 
                title="Password" 
                inputType="password" 
                color="slateblue"  
                borderColor="darkorange"
              />
              <Button title="Submit" borderColor="black"/>
          </div>
        </div>
      </div>
    );
  }
}
