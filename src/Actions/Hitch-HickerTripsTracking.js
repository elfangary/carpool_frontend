import Axios from 'axios';
import {hitchHikerTripsApi} from '../apiConfig';

// Action Types
//Get Hitch Hiker Trips
export const GET_HH_TRIPS_TRACKING_LOADING = 'GET_HH_TRIPS_TRACKING_LOADING';
export const GET_HH_TRIPS_TRACKING = 'GET_HH_TRIPS_TRACKING';
export const GET_HH_TRIPS_TRACKING_SUCCESS = 'GET_HH_TRIPS_TRACKING_SUCCESS';
export const GET_HH_TRIPS_TRACKING_FAILURE = 'GET_HH_TRIPS_TRACKING_FAILURE';

// Action Creators
//Get Hitch Hiker Trips
export const getHhTripsTrackingLoading = () => {
    return {
        type: GET_HH_TRIPS_TRACKING_LOADING
    };
};
export const getHhTripsTracking = (time) => {
    return {
        type: GET_HH_TRIPS_TRACKING,
        payload: Axios.get(hitchHikerTripsApi(time))
    };
};
export const getHhTripsTrackingSuccess = (hhTrackedTrips) => {
    return {
        type: GET_HH_TRIPS_TRACKING_SUCCESS,
        hhTrackedTrips
    };
};
export const getHhTripsTrackingFailure = (error) => {
    return {
        type: GET_HH_TRIPS_TRACKING_FAILURE,
        error
    };
};