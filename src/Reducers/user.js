import {
    GET_USER_LOADING, GET_USER_SUCCESS, GET_USER_FAILURE,
    UPDATE_USER_LOADING, UPDATE_USER_SUCCESS, UPDATE_USER_FAILURE,
    DECREMENT_USER_POINTS, INCREMENT_USER_POINTS, RATE_USER_LOADING, RATE_USER_SUCCESS, RATE_USER_FAILURE
} from '../Actions/user';

import {
    ADD_CHARGE_LOADING, ADD_CHARGE_SUCCESS, ADD_CHARGE_FAILURE
} from '../Actions/checkout';

const INITIAL_STATE = {
    user: {},
    points: 0,
    ratings: [],
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

        case UPDATE_USER_LOADING:
            return {...currentState, loading: true};
        case UPDATE_USER_SUCCESS:
            return {...currentState, user: action.user, loading: false};
        case UPDATE_USER_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case ADD_CHARGE_LOADING:
            return {...currentState, loading: true};
        case ADD_CHARGE_SUCCESS:
            return {...currentState, points: action.points, loading: false};
        case ADD_CHARGE_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case DECREMENT_USER_POINTS:
            return {...currentState, points: currentState.points-action.amount};

        case INCREMENT_USER_POINTS:
            return {...currentState, points: action.amount.points};

        case RATE_USER_LOADING:
            return {...currentState, loading: true};
        case RATE_USER_SUCCESS:
            return {...currentState, ratings: action.ratings, loading: false}
        case RATE_USER_FAILURE:
            return {...currentState, loading: false, error: action.error}

        default:
            return currentState;
	};
};