import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './views/Homepage/index';
import ForgotPassword from './components/ForgotPassword';

import Profile from './views/Profile/index';
import Settings from './views/Settings/index';
import DeletePage from './views/Settings/DeletePage/index'
import EditPage from './views/Settings/EditPage/index'

import Categories from './views/Categories/index';
import Category from './views/Category/index';
import Subcategory from './views/Category/Subcategory';
import Subsubcategory from './views/Category/Subsubcategory';
import Subsubsubcategory from './views/Category/Subsubsubcategory';
import Subsubsubsubcategory from './views/Category/Subsubsubsubcategory';

import Message from './views/Message/index';
import Messages from './views/Messages/index';

import Signup from './views/Signup/index';
import TribePage from './views/TribePage/index';
import Tribes from './views/Tribes/index';

import About from './views/About/index';


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
              <Link to="/forgotpassword">Forgot Password</Link>
            </li>
            <li>
              <Link to="/profile/van">Van's Profile</Link>
            </li>
            <li>
              <Link to="/categories">Catagories</Link>
            </li>
            <li>
              <Link to="/message">Message</Link>
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
              <Link to="/tribepage">Tribe Page</Link>
            </li>
            <li>
              <Link to="/tribes">Tribes</Link>
            </li>
          </ul>

          <Route exact path="/" component={Homepage} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />

          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings/deletepage" component={DeletePage} /> 
          <Route exact path="/settings/editpage" component={EditPage} /> 

          <Route exact path="/categories" component={Categories} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route exact path="/category/:categoryName/:subCategory" component={Subcategory} />
<<<<<<< HEAD
          <Route exact path="/category/:categoryName/:subCategory/:subSubcategory" component={Subsubcategory} />
          <Route exact path="/category/:categoryName/:subCategory/:subSubcategory/:subSubsubcategory" component={Subsubsubcategory} />
          <Route exact path="/category/:categoryName/:subCategory/:subSubcategory/:subSubsubcategory/:subSubsubsubcategory" component={Subsubsubsubcategory} />
=======
          <Route exact path="/category/:categoryName/:subCategory/:subSubcategory" component={Subsubategory} />

          <Route exact path="/category/:categoryName/:subCategory/:subSubcategory/:subSubsubcategory" component={Subsubsubategory} />
>>>>>>> 1001c9a1e9ea1a30da8baee3b7d60c3614750d2c

          <Route exact path="/message" component={Message} />
          <Route exact path="/messages" component={Messages} />
          
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/tribepage" component={TribePage} />
          <Route exact path="/tribes" component={Tribes} />

          <Route exact path="/about" component={About} />
        </Router>
      </div>
    );
  }
}

export default App;
