import React, { Component } from 'react';
//import './App.css';
import HhForm from './Containers/HhFormContainer';
import UserProfile from './Pages/UserProfile';
import {Link, Route, Redirect, Switch} from 'react-router-dom';
import SignUpForm from './Containers/SignUpFormContainer';
import Login from './Containers/loginFormContainer';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path='/signup' component={SignUpForm}/>
            <Route path="/login" component={Login} />
          </Switch>
          
          <div className="footer clearfix">
            <div className="footer-links">
              <Link to={'/contact'} className="footer-link">Contact Us</Link>
              <Link to={'/termsofuse'} className="footer-link">Terms Of Use</Link>
              <Link to={'/privacpolicy'} className="footer-link">Privacy Policy</Link>
            </div>
            <div className="copyrights">
              <small>&copy; 2017 Brandname, Inc. All Rights Reserved</small>
            </div>
            <div className="social-media-links">
              <Link to={'/facebook'} className="social-media">Facebook</Link>
              <Link to={'/instagram'} className="social-media">Instagram</Link>
              <Link to={'/twitter'} className="social-media">Twitter</Link>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
