import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';


import Navbar from './components/Navbar';
import Homepage from './views/Homepage/index';
import Profile from './views/Profile/index';
import Categories from './views/Categories/index';
import Members from './views/Members/index';
import Messages from './views/Messages/index';
import Settings from './views/Settings/index';
import Signup from './views/Signup/index';
import Tribes from './views/Tribes/index';
s
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
            <li>
              <Link to="/categories">Catagories</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/messages">Messages</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/tribes">Tribes</Link>
            </li>
          </ul>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/members" component={Members} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tribes" component={Tribes} />
        </Router>
      </div>
    );
  }
}

export default App;
