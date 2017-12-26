import {combineReducers} from 'redux';
import tripsReducer from './driver';
import carsReducer from './cars';

const rootReducer = combineReducers({
	newTrip: tripsReducer,
	userCars: carsReducer
});

export default rootReducer;