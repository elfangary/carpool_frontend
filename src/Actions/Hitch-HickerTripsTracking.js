import Axios from 'axios';
import {hitchHikerTripsApi} from '../apiConfig';
import {driverRatingApi} from '../apiConfig';

export const GET_HH_TRIPS_TRACKING_LOADING = 'GET_HH_TRIPS_TRACKING_LOADING';
export const GET_HH_TRIPS_TRACKING = 'GET_HH_TRIPS_TRACKING';
export const GET_HH_TRIPS_TRACKING_SUCCESS = 'GET_HH_TRIPS_TRACKING_SUCCESS';
export const GET_HH_TRIPS_TRACKING_FAILURE = 'GET_HH_TRIPS_TRACKING_FAILURE';

export const RATE_DRIVER_LODAING = 'RATE_DRIVER_LOADING';
export const RATE_DRIVER = 'RATE_DRIVER';
export const RATE_DRIVER_SUCCESS = 'RATE_DRIVER_FAILURE';
export const RATE_DRIVER_FAILURE = 'RATE_DRIVER_FAILURE';

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
export const rateDriverLoading = () => {
    return {
        type: RATE_DRIVER_LODAING
    };
};
export const rateDriver = (trip_id, driver_id, rate) => {
    return {
        type: RATE_DRIVER,
        payload: Axios.patch(driverRatingApi, {trip_id, driver_id, rate})
    };
};
export const rateDriverSuccess = (rate) => {
    return {
        type: RATE_DRIVER_SUCCESS,
        rate
    };
};
export const rateDriverFailure = (error) => {
    return {
        type: RATE_DRIVER_FAILURE,
        error
    };
};