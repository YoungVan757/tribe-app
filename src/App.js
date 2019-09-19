import { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Homepage from './views/Homepage/index';
import ForgotPassword from './components/ForgotPassword';
import NotFound from './components/NotFound';

import Profile from './views/Profile/index';
import Settings from './views/Settings/index';
import DeletePage from './views/Settings/DeletePage/index';
import EditPage from './views/Settings/EditPage/index';
import ChangeName from './views/Settings/EditPage/ChangeName/index';

import Categories from './views/Categories/index';
import Category from './views/Category/index';
import Subcategory from './views/Category/Subcategory';
import Subsubcategory from './views/Category/Subsubcategory';
import Subsubsubcategory from './views/Category/Subsubsubcategory';
import Subsubsubsubcategory from './views/Category/Subsubsubsubcategory';

import Message from './views/Message/index';
import Messages from './views/Messages/index';
import MessageSent from './views/MessageSent/index';

import Signup from './views/Signup/index';
import TribePage from './views/TribePage/index';
import Tribes from './views/Tribes/index';

import About from './views/About/index';

import DataSandBox from './views/datasandbox';
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

class App extends Component {
  render() {
    const style = css`
    background-color: deeppink;
    `
    return (
      <div css={style} className="App">
        <Router>
        <Navbar />
          {/* <ul>
            <li>
              <Link to="/sandbox">Data Sandbox</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/forgotpassword">Forgot Password</Link>
            </li>
            <li>
              <Link to="/profile/:username">Profile</Link>
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
          </ul> */}

          <Route exact path="/sandbox" component={DataSandBox} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/forgotpassword" component={ForgotPassword} />
          <Route exact path="/:" component={NotFound} />

          <Route exact path="/profile/:username" component={Profile} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/settings/deletepage" component={DeletePage} />
          <Route exact path="/settings/editpage" component={EditPage} />
          <Route exact path="/settings/editpage/changename" component={ChangeName} />

          <Route exact path="/categories" component={Categories} />
          <Route exact path="/category/:categoryName" component={Category} />
          <Route
            exact
            path="/category/:categoryName/:subCategory"
            component={Subcategory}
          />
          <Route
            exact path="/category/:categoryName/:subCategory/:subSubcategory"
            component={Subsubcategory}
          />
          <Route
            exact
            path="/category/:categoryName/:subCategory/:subSubcategory/:subSubsubcategory"
            component={Subsubsubcategory}
          />
          <Route
            exact
            path="/category/:categoryName/:subCategory/:subSubcategory/:subSubsubcategory/:subSubsubsubcategory"
            component={Subsubsubsubcategory}
          />

          <Route exact path="/message" component={Message} />
          <Route exact path="/messages" component={Messages} />
          <Route exact path="/messagesent" component={MessageSent} />

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
