import Axios from 'axios';
import {hitchHikerTripsApi} from '../apiConfig';

export const GET_TRIPS_TRACKING_LOADING = 'GET_TRIPS_TRACKING_LOADING';
export const GET_TRIPS_TRACKING = 'GET_TRIPS_TRACKING';
export const GET_TRIPS_TRACKING_SUCCESS = 'GET_TRIPS_TRACKING_SUCCESS';
export const GET_TRIPS_TRACKING_FAILURE = 'GET_TRIPS_TRACKING_FAILURE';

export const getTripsTrackingLoading = () => {
    return {
        type: GET_TRIPS_TRACKING_LOADING
    };
};
export const getTripsTracking = (time) => {
    return {
        type: GET_TRIPS_TRACKING,
        payload: Axios.get(hitchHikerTripsApi(time))
    };
};
export const getTripsTrackingSuccess = (trackedTrips) => {
    return {
        type: GET_TRIPS_TRACKING_SUCCESS,
        trackedTrips
    };
};
export const getTripsTrackingFailure = (error) => {
    return {
        type: GET_TRIPS_TRACKING_FAILURE,
        error
    };
};