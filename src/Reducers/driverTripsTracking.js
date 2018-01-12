import { GET_TRIPS_TRACKING_LOADING,
    GET_TRIPS_TRACKING_SUCCESS, GET_TRIPS_TRACKING_FAILURE, CHANGE_HH_STOP_STATUS_LOADING,
     CHANGE_HH_STOP_STATUS_SUCCESS, CHANGE_HH_STOP_STATUS_FAILURE,
    CHANGE_TRIP_STATUS_LOADING, CHANGE_TRIP_STATUS_SUCCESS,
     CHANGE_TRIP_STATUS_FAILURE} from '../Actions/DriverTripsTracking';

const INITIAL_STATE = {
    trackedTrips: [],
    updated_hh_stop: {},
    updated_trip: {},
    loading: false,
    error: null
};

export default function(current_state = INITIAL_STATE, action){
    switch(action.type) {
        case GET_TRIPS_TRACKING_LOADING:
            return {
                ...current_state,
                loading: true
            };
            break;
        case GET_TRIPS_TRACKING_SUCCESS:
            return {
                ...current_state,
                trackedTrips: action.trackedTrips,
                loading: false
            };
            break;
        case GET_TRIPS_TRACKING_FAILURE:
            return {
                ...current_state,
                error: action.error,
                loading: false
            };
            break;
        case CHANGE_HH_STOP_STATUS_LOADING:
            return {
                ...current_state,
                loading: true
            };
            break;
        case CHANGE_HH_STOP_STATUS_SUCCESS:
            return {
                ...current_state,
                updated_hh_stop: action.updated_hh_stop,
                loading: false
            };
            break;
        case CHANGE_HH_STOP_STATUS_FAILURE:
            return {
                ...current_state,
                error: action.error,
                loading: false
            };
            break;
        case CHANGE_TRIP_STATUS_LOADING:
            return {
                ...current_state,
                loading: true
            };
            break;
        case CHANGE_TRIP_STATUS_SUCCESS:
            const trips = current_state.trackedTrips.filter(trip => trip.id !== action.updated_trip.id);
            return {
                ...current_state,
                trackedTrips: trips,
                updated_trip: action.updated_trip,
                loading: false
            };
            break;
        case CHANGE_TRIP_STATUS_FAILURE:
            return {
                ...current_state,
                error: action.error,
                loading: false
            };
            break;
            default:
                return current_state;
    }
};
