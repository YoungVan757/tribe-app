import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Input from './components/Input';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input placeholder="Your email" />
        <Input placeholder="Hi" />
        <Input placeholder="Phone" />
        <Button title="Submit" />
      </div>
    );
  }
}

export default App;
