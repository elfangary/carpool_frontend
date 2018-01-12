import React, { Component } from 'react';
import SignUpForm from '../../Containers/SignUpFormContainer';
import Login from '../../Containers/loginFormContainer';
import { Route, Switch, Link } from 'react-router-dom';
import './homePage_style.css';
import TypePage from '../TypePage';
import UserProfile from '../UserProfile';
import history from '../../history';


export default class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				{
	                (localStorage.jwtToken)?
	                <div>
	                  {history.push('/type')}
	                </div>
	                :
	                  <Login />
                }
			</div>
		)
	};
};