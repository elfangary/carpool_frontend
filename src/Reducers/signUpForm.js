import {
	SIGNUP_LOADING, SIGNUP_SUCCESS, SIGNUP_FAILURE
} from '../Actions/signUpForm';

const INITIAL_STATE = {
   	user: {},
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {

		case SIGNUP_LOADING:
			return {...currentState, loading: true};
		case SIGNUP_SUCCESS:
			return {...currentState, user: action.user, loading: false};
		case SIGNUP_FAILURE:
			return {...currentState, error: action.error, loading: false};
		default:
			return currentState;
	};
};