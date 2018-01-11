import Axios from 'axios';
import {driverTripsApi} from '../apiConfig';
import {updateHhStopApi} from '../apiConfig';
import {tripStatusApi} from '../apiConfig';
import {userRatingApi} from '../apiConfig';
import {addBalanceToDriverApi} from '../apiConfig';
import {addBalanceToHhApi} from '../apiConfig';

export const GET_TRIPS_TRACKING_LOADING = 'GET_TRIPS_TRACKING_LOADING';
export const GET_TRIPS_TRACKING = 'GET_TRIPS_TRACKING';
export const GET_TRIPS_TRACKING_SUCCESS = 'GET_TRIPS_TRACKING_SUCCESS';
export const GET_TRIPS_TRACKING_FAILURE = 'GET_TRIPS_TRACKING_FAILURE';

export const CHANGE_HH_STOP_STATUS_LOADING = 'CHANGE_HH_STOP_LOADING';
export const CHANGE_HH_STOP_STATUS = 'CHANGE_HH_STOP_STATUS';
export const CHANGE_HH_STOP_STATUS_SUCCESS = 'CHANGE_HH_STOP_STATUS_SUCCESS';
export const CHANGE_HH_STOP_STATUS_FAILURE = 'CHANGE_HH_STOP_STATUS_FAILURE';

export const CHANGE_TRIP_STATUS_LOADING = 'CHANGE_TRIP_STATUS_LOADING';
export const CHANGE_TRIP_STATUS = 'CHANGE_TRIP_STATUS';
export const CHANGE_TRIP_STATUS_SUCCESS = 'CHANGE_TRIP_STATUS_SUCCESS';
export const CHANGE_TRIP_STATUS_FAILURE = 'CHANGE_TRIP_STATUS_FAILURE';

export const RATE_USER_LOADING = 'RATE_USER_RATING';
export const RATE_USER = 'RATE_USER';
export const RATE_USER_SUCCESS = 'RATE_USER_SUCCESS';
export const RATE_USER_FAILURE = 'RATE_USER_FAILURE';

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

export const changeTripStatusLoading = () => {
    return {
        type: CHANGE_TRIP_STATUS_LOADING
    };
};
export const changeTripStatus = (trip_id, status) => {
    return {
        type: CHANGE_TRIP_STATUS,
        payload: Axios.patch(tripStatusApi(trip_id, status))
    };
};
export const changeTripStatusSuccess = (updated_trip) => {
    return {
        type: CHANGE_TRIP_STATUS_SUCCESS,
        updated_trip
    };
};
export const changeTripStatusFailure = (error) => {
    return {
        type: CHANGE_TRIP_STATUS_FAILURE,
        error
    };
};
export const rateUserLoading = () => {
    return {
        type: RATE_USER_LOADING
    };
};
export const rateUser = (ratings) => {
    return {
        type: RATE_USER,
        payload: Axios.post(userRatingApi, {ratings})
    };
};
export const rateUserSuccess = (rate) => {
    return {
        type: RATE_USER_SUCCESS,
        rate
    };
};
export const rateUserFailure = (error) => {
    return {
        type: RATE_USER_FAILURE,
        error
    };
};