import {
    GET_NOTIFICATIONS_LOADING, GET_NOTIFICATIONS_SUCCESS, GET_NOTIFICATIONS_FAILURE
} from '../Actions/notifications';

const INITIAL_STATE = {
    notifications: [],
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
	switch (action.type){
		case GET_NOTIFICATIONS_LOADING:
            return {...currentState, loading: true};
        case GET_NOTIFICATIONS_SUCCESS:
            return {...currentState, notifications: action.Notifications, loading: false};
        case GET_NOTIFICATIONS_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
	};
};