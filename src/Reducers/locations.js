import {
    GET_LOCATIONS_LOADING, GET_LOCATIONS_SUCCESS, GET_LOCATIONS_FAILURE
} from '../Actions/Locations';

const INITIAL_STATE = {
    locations: [],
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {

        case GET_LOCATIONS_LOADING:
            return {...currentState, loading: true};
        case GET_LOCATIONS_SUCCESS:
            return {...currentState, locations: action.locations, loading: false};
        case GET_LOCATIONS_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
    };
};