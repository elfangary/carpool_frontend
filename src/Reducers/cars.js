import {
	GET_CARS_LOADING, GET_CARS_SUCCESS, GET_CARS_FAILURE
} from '../Actions/cars';

const INITIAL_STATE = {
   	cars: [],
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {

		case GET_CARS_LOADING:
			return {...currentState, loading: true};
			break;
		case GET_CARS_SUCCESS:
			return {...currentState, cars: action.cars, loading: false};
			break;
		case GET_CARS_FAILURE:
			return {...currentState, error: action.error, loading: false};
			break;

		default:
			return currentState;
			break;
	}
};