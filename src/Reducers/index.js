import { combineReducers } from 'redux';
import locationsReducer from './locations';
import HhFormReducer from './hhForm';
import tripsReducer from './driver';
import carsReducer from './cars';
import userReducer from './user';

const rootReducer = combineReducers({
    locations: locationsReducer,
    filteredTrips: HhFormReducer,
	newTrip: tripsReducer,
	userCars: carsReducer,
	user: userReducer
});

export default rootReducer;