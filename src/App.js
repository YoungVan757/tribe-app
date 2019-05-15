import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Homepage from './views/Homepage/index';
import Profile from './views/Profile/index';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile/van">Van's Profile</Link>
            </li>
          </ul>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile/:username" component={Profile} />
        </Router>
      </div>
    );
  }
}

export default App;
