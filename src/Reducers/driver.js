import {
	ADD_TRIP_LOADING, ADD_TRIP_SUCCESS, ADD_TRIP_FAILURE,
	ADD_CAR_LOADING, ADD_CAR_SUCCESS, ADD_CAR_FAILURE
} from '../Actions/driver';

const INITIAL_STATE = {
	trip: {},  
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {
		case ADD_TRIP_LOADING:
			return {...currentState, loading: true};
		case ADD_TRIP_SUCCESS:
			return {...currentState, trip: action.trip, loading: false};
		case ADD_TRIP_FAILURE:
			return {...currentState, error: action.error, loading: false};
		default:
			return currentState;
	};
};