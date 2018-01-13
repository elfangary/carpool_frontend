import React, { Component } from 'react';
import './App.css';
import UserProfile from './Pages/UserProfile';
import {Link, Route, Switch} from 'react-router-dom';
import SignUpForm from './Containers/SignUpFormContainer';
import Login from './Containers/loginFormContainer';
import HomePage from './Pages/HomePage';
// import Notifications from './Containers/NotificationsContainer';
import TypePage from './Pages/TypePage';
// import 'antd/lib/style/index.css';

import DriverContainer from './Containers/DriverContainer';
import UserContainer from './Containers/UserContainer';
import CarsContainer from './Containers/CarsContainer';
import HhForm from './Containers/HhFormContainer';
import DriverTrips from './Containers/DriverTripsTrackingContainer';
import HhTrips from './Containers/HhTripsTrackingContainer';
import Notifications from './Containers/NotificationsContainer';

import CarDetails from './Containers/CarsDetailsContainer';
import Checkout from './Components/Checkout';
import EditUserForm from './Containers/editUserFormContainer';

class App extends Component {

    logout(){
      localStorage.removeItem('jwtToken');
    }
  render() {
    return (
        <div className="App clearfix">
          <header className="header">
              {!(localStorage.jwtToken)?
                <Link to="/aboutus" className="nav-link">Who Are We?</Link> :
                <div className="header">
                  <Link to="/" className="user-nav-link" onClick={() => {this.logout()}}>logout</Link>
                  <Link to={"/notifications"} className="notification-link"> <i class="fa fa-bell" aria-hidden="true"></i></Link>
                </div>}
          </header>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/type" component={TypePage} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/signup" component={SignUpForm} />
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
