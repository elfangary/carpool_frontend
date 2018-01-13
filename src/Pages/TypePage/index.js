import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './typePage_style.css';
import Notifications from '../../Containers/NotificationsContainer';

export default class WelcomePage extends Component {
    logout(){
      localStorage.removeItem('jwtToken');
    }

    render(){
        return (
        	<div className="type-container clearfix">
                <Link to="/" className="user-nav-link" onClick={() => {this.logout()}}>logout</Link>
                <div className="type-page">
                    <div className="notifications-displayed">
                        <Notifications />
                    </div>
                    <h1>HOW DO YOU FEEL LIKE TODAY?</h1>
                    <Link to={'/profile/hitch-hiking/trips'} className="type-link">HITCH-HIKING</Link>
                    <Link to={'/profile/driving/trips'} className="type-link">DRIVING</Link>
                </div>
            </div>
        )
    };
};