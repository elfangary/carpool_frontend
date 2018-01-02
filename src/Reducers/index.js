import { combineReducers } from 'redux';
import locationsReducer from './locations';
import HhFormReducer from './hhForm';
import tripsReducer from './driver';
import carsReducer from './cars';
import userReducer from './user';
import signUpReducer from './signUpForm';
import loginReducer from './loginForm';

const rootReducer = combineReducers({
    locations: locationsReducer,
    filteredTrips: HhFormReducer,
	newTrip: tripsReducer,
	userCars: carsReducer,
	user: userReducer,
	signUp: signUpReducer,
	login: loginReducer
});

export default rootReducer;