import {
	LOGIN_LOADING, LOGIN_SUCCESS, LOGIN_FAILURE, LOG_OUT
} from '../Actions/loginForm';

const INITIAL_STATE = {
   	user: {},
   	loggedIn: false,
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {
		case LOGIN_LOADING:
			return {...currentState, loading: true};
		case LOGIN_SUCCESS:
			return {...currentState, user: action.user, loading: false, loggedIn: true};
		case LOGIN_FAILURE:
			return {...currentState, error: action.error, loading: false};
		case LOG_OUT:
			return {...currentState, user: {}, loggedIn: false}
		default:
			return currentState;
	};
};