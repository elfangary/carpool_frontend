import { GET_FILTERED_TRIPS_LOADING, GET_FILTERED_TRIPS_SUCCESS, GET_FILTERED_TRIPS_FAILURE,
 ADD_HH_STOP_POINT_LOADING, ADD_HH_STOP_POINT_SUCCESS, ADD_HH_STOP_POINT_FAILURE } from '../Actions/HhForm';

const INITIAL_STATE = {
    trips: [],
    new_hh_stop: {},
    loading: false,
    error: null,
    message: null
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
            const message = action.trips.length === 0 ? 'Sorry, we have no available trips.' : null
            return {
                ...currentState,
                trips: action.trips,
                loading: false,
                message
            };
        break;
        case GET_FILTERED_TRIPS_FAILURE:
            return {
                ...currentState,
                error:action.error,
                loading: false
            };
        break;
        case ADD_HH_STOP_POINT_LOADING:
            return {
                ...currentState,
                loading: true
            }
        break;
        case ADD_HH_STOP_POINT_SUCCESS:
            return {
                ...currentState,
                new_hh_stop: action.new_hh_stop,
                loading: false
            }
        break;
        case ADD_HH_STOP_POINT_FAILURE:
            return {
                ...currentState,
                error: action.error,
                loading: false
            }
        break;
        default:
            return currentState;
    }
};