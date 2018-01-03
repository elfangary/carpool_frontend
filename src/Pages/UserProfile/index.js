import React, { Component } from 'react';
import DriverContainer from '../../Containers/DriverContainer';
import UserContainer from '../../Containers/UserContainer';
import CarsContainer from '../../Containers/CarsContainer';
import CarDetails from '../../Components/CarDetails';
import HhForm from '../../Containers/HhFormContainer';
import Checkout from '../../Components/Checkout';
import { Route, Switch } from 'react-router-dom';
// import './index.css';

export default class UserProfile extends Component {
	render() {
		return (
			<div className="profile">
				<UserContainer />
				<Switch>
              		<Route path="/driving" exact component={DriverContainer} />
              		<Route path="/driving/cars" component={CarDetails} />
              		<Route path="/hitch-hiking" component={HhForm} />
              		<Route path="/checkout" component={Checkout} />
              	</Switch>

			</div>
		)
	};
};