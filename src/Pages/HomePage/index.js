import React, { Component } from 'react';
import SignUpForm from '../../Containers/SignUpFormContainer';
import Login from '../../Containers/loginFormContainer';
import { Route, Switch } from 'react-router-dom';
import './homePage_style.css';

export default class HomePage extends Component {
	render() {
		return (
			<div className="HomePage">
				<Switch>
              		<Route path="/" exact component={Login} />
              		<Route path="/signup" component={SignUpForm} />
              	</Switch>
			</div>
		)
	};
};