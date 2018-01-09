import React, { Component } from 'react';
import SignUpForm from '../../Containers/SignUpFormContainer';
import Login from '../../Containers/loginFormContainer';
import { Route, Switch } from 'react-router-dom';

export default class HomePage extends Component {
	render() {
		return (
			<div>
				<Switch>
              		<Route path="/" exact component={Login} />
              		<Route path="/signup" component={SignUpForm} />
              	</Switch>
			</div>
		)
	};
};