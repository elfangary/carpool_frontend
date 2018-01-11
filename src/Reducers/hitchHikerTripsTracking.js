import { GET_HH_TRIPS_TRACKING_LOADING, 
    GET_HH_TRIPS_TRACKING_SUCCESS, GET_HH_TRIPS_TRACKING_FAILURE, RATE_DRIVER_LODAING,
     RATE_DRIVER_SUCCESS, RATE_DRIVER_FAILURE } from '../Actions/Hitch-HickerTripsTracking';

const INITIAL_STATE = {
    hhTrackedTrips: [],
    driverRate: {},
    loading: false,
    error: null
};

export default function(current_state = INITIAL_STATE, action){
    switch(action.type) {
        case GET_HH_TRIPS_TRACKING_LOADING:
            return {
                ...current_state,
                loading: true
            };
            break;
        case GET_HH_TRIPS_TRACKING_SUCCESS:
            return {
                ...current_state,
                hhTrackedTrips: action.hhTrackedTrips,
                loading: false
            };
            break;
        case GET_HH_TRIPS_TRACKING_FAILURE:
            return {
                ...current_state,
                error: action.error,
                loading: false
            };
            break;
        case RATE_DRIVER_LODAING: 
            return {
                ...current_state,
                loading: true
            };
            break;
        case RATE_DRIVER_SUCCESS:
            return {
                ...current_state,
                driverRate: action.rate,
                loading: false
            };
            break;
        case RATE_DRIVER_FAILURE:
            return {
                ...current_state,
                loading: false,
                error: action.error
            };
            break;
        default:
            return current_state;
    }
};
