import React, { Component } from 'react';
import './App.css';
import Profile from './components/Profile';
import Tribe from './components/Tribe';
import Board from './components/Board';
import Navbar from './components/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Profile />
        <Tribe />
        <Board />
      </div>
    );
  }
}

export default App;
