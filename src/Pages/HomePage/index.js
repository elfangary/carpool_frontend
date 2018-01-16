import React, { Component } from 'react';
import Login from '../../Containers/loginFormContainer';
import './homePage_style.css';
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