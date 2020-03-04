import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Login from '../Login/Login';
import Home from '../Home/Home';
import Signup from '../Signup/Signup';
import Profile from '../Profile/Profile';
import Application from '../Application/Application';
import Social from '../Social/Social';

// import styles from './App.style';

class App extends Component {
  render() {
    const isLoggedin=window.localStorage.getItem('isLoggedin');
    console.log("isLoggedin", isLoggedin)
    return (
      <Router>
        <div>
          { isLoggedin ? (
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Login" component={Login} />
              <Route exact path="/Signup" component={Signup} />
              <Route exact path="/Profile" component={Profile} />
              <Route exact path="/Application" component={Application} />
              <Route exact path="/Social" component={Social} />
            </Switch>
          ): (
            <Switch>
              <Redirect from="/" to="/Login" />
              <Redirect from="/Profile" to="/Login" />
              <Redirect from="/Application" to="/Login" />
            </Switch>
          )
          }
        </div>
      </Router>
    );
  }
}

export default App;
