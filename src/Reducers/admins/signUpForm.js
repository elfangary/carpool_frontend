import {
	ADMIN_SIGNUP_LOADING, ADMIN_SIGNUP_SUCCESS, ADMIN_SIGNUP_FAILURE
} from '../../Actions/admins/signUpForm';

const INITIAL_STATE = {
   	admin: {},
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
	switch(action.type) {
		case ADMIN_SIGNUP_LOADING:
			return {...currentState, loading: true};
		case ADMIN_SIGNUP_SUCCESS:
			return {...currentState, admin: action.admin, loading: false};
		case ADMIN_SIGNUP_FAILURE:
			return {...currentState, error: action.error, loading: false};
		default:
			return currentState;
	};
};