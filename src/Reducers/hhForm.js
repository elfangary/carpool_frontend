import { GET_FILTERED_TRIPS_LOADING, GET_FILTERED_TRIPS_SUCCESS, GET_FILTERED_TRIPS_FAILURE } from '../Actions/HhForm';

const INITIAL_STATE = {
    trips: [],
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
    switch(action.type) {
        case GET_FILTERED_TRIPS_LOADING:
            return {
                ...currentState,
                loading: true
            };
            break;
        case GET_FILTERED_TRIPS_SUCCESS:
            return {
                ...currentState,
                trips: action.trips,
                loading: false,
            };
            break;
        case GET_FILTERED_TRIPS_FAILURE:
            return {
                ...currentState,
                error:action.error,
                loading: false
            };
            break;
        default:
            return currentState;
    }
};