import { combineReducers } from 'redux';
import locationsReducer from './locations';
import HhFormReducer from './hhForm';
import tripsReducer from './driver';
import carsReducer from './cars';
import userReducer from './user';
import signUpReducer from './signUpForm';
import loginReducer from './loginForm';
import driverTrackedTripsReducer from './driverTripsTracking';
import hitchHikerTrackedTripsReducer from './hitchHikerTripsTracking';
import notificationsReducer from './notifications';
import adminSignUpFormReducer from './admins/signUpForm';
import adminLoginReducer from './admins/loginForm';
import ratingReducer from './rating';
import { LOG_OUT } from '../Actions/loginForm';

const appReducer = combineReducers({
    locations: locationsReducer,
    filteredTrips: HhFormReducer,
	newTrip: tripsReducer,
	userCars: carsReducer,
	user: userReducer,
	signUp: signUpReducer,
	login: loginReducer,
	driverTrackedTrips: driverTrackedTripsReducer,
	hhTrackedTrips: hitchHikerTrackedTripsReducer,
	notifications: notificationsReducer,
	admin_signUp: adminSignUpFormReducer,
	admin_login: adminLoginReducer,
	rating: ratingReducer
});

const rootReducer = (state, action) => {
	if (action.type === LOG_OUT) {
		state = undefined;
	}
	return appReducer(state, action);
}

export default rootReducer;