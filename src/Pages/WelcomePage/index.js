import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class WelcomePage extends Component {
    render(){
        return (
            <div>
                <h1>HOW DO YOU FEEL LIKE TODAY?</h1>
                <Link to={'/hitch-hiking/trips'}>HITCH-HIKING</Link>
                <Link to={'/driving/trips'}>DRIVING</Link>
            </div>
        )
    };
};