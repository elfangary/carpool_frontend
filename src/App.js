import React, { Component } from 'react';
import './App.css';
import UserProfile from './Pages/UserProfile';
import {Link, Route, Switch} from 'react-router-dom';
import SignUpForm from './Containers/SignUpFormContainer';
import Login from './Containers/loginFormContainer';
import HomePage from './Pages/HomePage';
import Notifications from './Containers/NotificationsContainer';
import TypePage from './Pages/TypePage';
import UserHomePage from './Pages/UserHomePage';

// import 'antd/lib/style/index.css';

class App extends Component {

    logout(){
      localStorage.removeItem('jwtToken');
    }
  render() {
    return (
        <div className="App clearfix">
          <header className="header">
          {console.log(window.location)}
              {!(localStorage.jwtToken)?
                  (window.location.pathname === "/home")?
                    <Link to="/" className="nav-link">Get Started</Link> :
                      <Link to="/home" className="nav-link">Who Are We?</Link> :
                (window.location.pathname === "/home")
                ?
                  <div className="home-nav">
                    <Link to="/profile/hitch-hiking/trips" className="home-nav-link">HITCH-HIKING</Link>
                    <Link to="/profile/driving/trips" className="home-nav-link">DRIVING</Link>
                    <Link to="/" className="home-nav-link" onClick={() => {this.logout()}}>logout</Link>
                  </div>
                  :
                  <div className="user-nav">
                    <Link to="/" className="user-nav-link" onClick={() => {this.logout()}}>logout</Link>
                    <Link to="/home" className="user-nav-link">Who Are We?</Link>
                   <div className="notifications-displayed">
                      <Notifications />
                    </div>
                  </div>}
          </header>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/type" component={TypePage} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/signup" component={SignUpForm} />
            <Route path="/home" component={UserHomePage} />
          </Switch>
          <div className="footer">
            <div className="footer-links">
              <Link to={'/contact'} className="footer-link">Contact Us</Link>
              <Link to={'/termsofuse'} className="footer-link">Terms Of Use</Link>
              <Link to={'/privacpolicy'} className="footer-link">Privacy Policy</Link>
            </div>
            <div className="copyrights">
              <small>&copy; 2017 Brandname, Inc. All Rights Reserved</small>
            </div>
            <div className="social-media-links">
              <Link to={'/twitter'} className="social-media"><i class="fa fa-twitter" aria-hidden="true"></i></Link>
              <Link to={'/facebook'} className="social-media"><i class="fa fa-facebook" aria-hidden="true"></i></Link>
              <Link to={'/instagram'} className="social-media"><i class="fa fa-instagram" aria-hidden="true"></i></Link>
            </div>
          </div>
        </div>
    )
  }
}

export default App;
