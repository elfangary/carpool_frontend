import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default class WelcomePage extends Component {


    render(){
        return (
        	<div className="type-container clearfix">
                
                <div className="type-page">
                    
                    <h1>HOW DO YOU FEEL LIKE TODAY?</h1>
                    <Link to={'/profile/hitch-hiking/trips'} className="type-link">HITCH-HIKING</Link>
                    <Link to={'/profile/driving/trips'} className="type-link">DRIVING</Link>
                </div>
            </div>
        )
    };
};