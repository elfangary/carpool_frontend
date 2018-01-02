import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE
} from '../Actions/user';

const INITIAL_STATE = {
    user: {},
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
	switch (action.type){
		case GET_USER_LOADING:
            return {...currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
	};
};