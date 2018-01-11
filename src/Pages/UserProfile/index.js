import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import DriverContainer from '../../Containers/DriverContainer';
import UserContainer from '../../Containers/UserContainer';
import CarsContainer from '../../Containers/CarsContainer';
import HhForm from '../../Containers/HhFormContainer';
import DriverTrips from '../../Containers/DriverTripsTrackingContainer';
import HhTrips from '../../Containers/HhTripsTrackingContainer';
import Notifications from '../../Containers/NotificationsContainer';
import CarDetails from '../../Containers/CarsDetailsContainer';
import Checkout from '../../Components/Checkout';
import EditUserForm from '../../Containers/editUserFormContainer';
import HomePage from '../HomePage';
import './index.css';

// there is notification component in the first of this div <Notifications />

export default class UserProfile extends Component {
	render() {
		if(localStorage.jwtToken){
			return (
				<div className="profile">
					
					<UserContainer />
					<Switch>
						<Route path="/edit" component={EditUserForm} />
	              		<Route path="/driving" exact component={DriverContainer} />
	              		<Route path="/driving/cars" component={CarDetails} />
	              		<Route exact path="/hitch-hiking" component={HhForm} />
	              		<Route path="/checkout" component={Checkout} />
						<Route path="/driving/trips" component={DriverTrips} />
						<Route path="/hitch-hiking/trips" component={HhTrips} />
	              	</Switch>

				</div>
			)
		}else{
			return(
				<HomePage />
			)
		}
		
	};
};