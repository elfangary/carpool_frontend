import {
	ADMIN_LOGIN_LOADING, ADMIN_LOGIN_SUCCESS, ADMIN_LOGIN_FAILURE, ADMIN_LOG_OUT
} from '../../Actions/admins/loginForm';

const INITIAL_STATE = {
   	admin: {},
   	loggedIn: false,
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {
		case ADMIN_LOGIN_LOADING:
			return {...currentState, loading: true};
		case ADMIN_LOGIN_SUCCESS:
			return {...currentState, admin: action.admin, loading: false, loggedIn: true};
		case ADMIN_LOGIN_FAILURE:
			return {...currentState, error: action.error, loading: false};
		case ADMIN_LOG_OUT:
			return {...currentState, admin: {}, loggedIn: false}
		default:
			return currentState;
	};
};