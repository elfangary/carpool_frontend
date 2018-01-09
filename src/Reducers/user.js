import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE,
    DECREMENT_USER_POINTS
} from '../Actions/user';

import {
    ADD_CHARGE_LOADING, ADD_CHARGE_SUCCESS, ADD_CHARGE_FAILURE
} from '../Actions/checkout';

import {
    ADD_BALANCE_TO_DRIVER_LOADING, ADD_BALANCE_TO_DRIVER_SUCCESS, ADD_BALANCE_TO_DRIVER_FAILURE
} from '../Actions/DriverTripsTracking';

const INITIAL_STATE = {
    user: {},
    points: 0,
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
	switch (action.type){
		case GET_USER_LOADING:
            return {...currentState, loading: true};
        case GET_USER_SUCCESS:
            return {...currentState, user: action.user, points: action.user.points, loading: false};
        case GET_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case ADD_CHARGE_LOADING:
            return {...currentState, loading: true};
        case ADD_CHARGE_SUCCESS:
            return {...currentState, points: action.points, loading: false};
        case ADD_CHARGE_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case DECREMENT_USER_POINTS:
            return {...currentState, points: currentState.points-action.amount};

        case ADD_BALANCE_TO_DRIVER_LOADING:
            return {...currentState, loading: true};
        case ADD_BALANCE_TO_DRIVER_SUCCESS:
            return {...currentState, points: currentState.points+action.added_balance, loading: false};
        case ADD_BALANCE_TO_DRIVER_FAILURE:
            return {...currentState, error: action.error, loading: false};

        default:
            return currentState;
	};
};