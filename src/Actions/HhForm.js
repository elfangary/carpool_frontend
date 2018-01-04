import Axios from 'axios';
import {SearchApi} from '../apiConfig';
import {hhStopPointApi} from '../apiConfig';

export const GET_FILTERED_TRIPS_LOADING = 'GET_FILTERED_TRIPS_LOADING';
export const GET_FILTERED_TRIPS = 'GET_FILTERED_TRIPS';
export const GET_FILTERED_TRIPS_SUCCESS = 'GET_FILTERED_TRIPS_SUCCESS';
export const GET_FILTERED_TRIPS_FAILURE = 'GET_FILTERED_TRIPS_FAILURE';
export const ADD_HH_STOP_POINT_LOADING = 'ADD_HH_STOP_POINT_LOADING';
export const ADD_HH_STOP_POINT = 'ADD_HH_STOP_POINT';
export const ADD_HH_STOP_POINT_SUCCESS = 'ADD_HH_STOP_POINT_SUCCESS';
export const ADD_HH_STOP_POINT_FAILURE = 'ADD_HH_STOP_POINT_FAILURE';

export const getFilteredTripsLoading = () => {
    return {
        type: GET_FILTERED_TRIPS_LOADING
    };
};
export const getFilteredTrips = (day, location_id, start_time, end_time) => {
    return {
        type: GET_FILTERED_TRIPS,
        payload: Axios.get(SearchApi(
            day,
            location_id,
            start_time,
            end_time
        ))
    };
};
export const getFilteredTripsSuccess = (trips) => {
    return {
        type: GET_FILTERED_TRIPS_SUCCESS,
        trips
    };
};
export const getFilteredTripsFailure = (error) => {
    return {
        type: GET_FILTERED_TRIPS_FAILURE,
        error
    };
};
export const addHhStopPointLoading = () => {
    return {
        type: ADD_HH_STOP_POINT_LOADING
    };
};
export const addHhStopPoint = (booked_seats, stop_point_id) => {
    return {
        type: ADD_HH_STOP_POINT,
        payload: Axios.post(hhStopPointApi, {
            booked_seats,
            stop_point_id
        })
    };
};
export const addHhStopPointSuccess = (new_hh_stop) => {
    return {
        type: ADD_HH_STOP_POINT_SUCCESS,
        new_hh_stop
    };
};
export const addHhStopPointFailure = (error) => {
    return {
        type: ADD_HH_STOP_POINT_FAILURE,
        error
    }
}
