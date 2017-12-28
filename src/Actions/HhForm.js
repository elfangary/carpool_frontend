import Axios from 'axios';
import {SearchApi} from '../apiConfig';

export const GET_FILTERED_TRIPS_LOADING = 'GET_FILTERED_TRIPS_LOADING';
export const GET_FILTERED_TRIPS = 'GET_FILTERED_TRIPS';
export const GET_FILTERED_TRIPS_SUCCESS = 'GET_FILTERED_TRIPS_SUCCESS';
export const GET_FILTERED_TRIPS_FAILURE = 'GET_FILTERED_TRIPS_FAILURE';

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
