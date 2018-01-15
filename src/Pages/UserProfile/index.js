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


export default class UserProfile extends Component {
	render() {
		if(localStorage.jwtToken){
			return (
				<div className="app-container ">

					<div className="left-container">
						<UserContainer />
					</div>

					<div className="right-container clearfix">
						<Switch>
							<Route path="/profile/edit" exact component={EditUserForm} />
	                  		<Route path="/profile/driving" exact component={DriverContainer} />
	                  		<Route path="/profile/driving/cars" component={CarDetails} />
	                  		<Route exact path="/profile/hitch-hiking" component={HhForm} />
	                 		<Route path="/profile/checkout" component={Checkout} />
	                  		<Route path="/profile/driving/trips" component={DriverTrips} />
	                  		<Route path="/profile/hitch-hiking/trips" component={HhTrips} />
			            </Switch>
		            </div>
				</div>
			)
		}else{
			return(
				<HomePage />
			)
		}
	};
};