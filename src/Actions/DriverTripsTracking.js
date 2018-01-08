import Axios from 'axios';
import {driverTripsApi} from '../apiConfig';
import {updateHhStopApi} from '../apiConfig';

export const GET_TRIPS_TRACKING_LOADING = 'GET_TRIPS_TRACKING_LOADING';
export const GET_TRIPS_TRACKING = 'GET_TRIPS_TRACKING';
export const GET_TRIPS_TRACKING_SUCCESS = 'GET_TRIPS_TRACKING_SUCCESS';
export const GET_TRIPS_TRACKING_FAILURE = 'GET_TRIPS_TRACKING_FAILURE';

export const CHANGE_HH_STOP_STATUS_LOADING = 'CHANGE_HH_STOP_LOADING';
export const CHANGE_HH_STOP_STATUS = 'CHANGE_HH_STOP_STATUS';
export const CHANGE_HH_STOP_STATUS_SUCCESS = 'CHANGE_HH_STOP_STATUS_SUCCESS';
export const CHANGE_HH_STOP_STATUS_FAILURE = 'CHANGE_HH_STOP_STATUS_FAILURE';

export const getTripsTrackingLoading = () => {
    return {
        type: GET_TRIPS_TRACKING_LOADING
    };
};
export const getTripsTracking = (time) => {
    return {
        type: GET_TRIPS_TRACKING,
        payload: Axios.get(driverTripsApi(time))
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

export const changeHhStopStatusLoading = () => {
    return {
        type: CHANGE_HH_STOP_STATUS_LOADING
    };
};
export const changeHhStopStatus = (id, confirm) => {
    return {
        type: CHANGE_HH_STOP_STATUS,
        payload: Axios.patch(updateHhStopApi(id, confirm))
    };
};
export const changeHhStopStatusSuccess = (updated_hh_stop) => {
    return {
        type: CHANGE_HH_STOP_STATUS_SUCCESS,
        updated_hh_stop
    };
};
export const changeHhStopStatusFailure = (error) => {
    return {
        type: CHANGE_HH_STOP_STATUS_FAILURE,
        error
    };
};