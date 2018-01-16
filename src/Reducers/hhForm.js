import { GET_FILTERED_TRIPS_LOADING, GET_FILTERED_TRIPS_SUCCESS, GET_FILTERED_TRIPS_FAILURE,
 ADD_HH_STOP_POINT_LOADING, ADD_HH_STOP_POINT_SUCCESS, ADD_HH_STOP_POINT_FAILURE } from '../Actions/HhForm';

const INITIAL_STATE = {
    trips: [],
    new_hh_stop: {},
    loading: false,
    error: null
};

export default function(currentState = INITIAL_STATE, action){
    switch(action.type) {
        case GET_FILTERED_TRIPS_LOADING:
            return {...currentState, loading: true};
        case GET_FILTERED_TRIPS_SUCCESS:
            return {...currentState, trips: action.trips, loading: false};
        case GET_FILTERED_TRIPS_FAILURE:
            return {...currentState, error:action.error, loading: false};
        case ADD_HH_STOP_POINT_LOADING:
            return {...currentState, loading: true};
        case ADD_HH_STOP_POINT_SUCCESS:
            return {...currentState, new_hh_stop: action.new_hh_stop, loading: false};
        case ADD_HH_STOP_POINT_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
    }
};