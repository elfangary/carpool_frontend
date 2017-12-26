import Axios from 'axios';
import {locationsApi, newTripApi} from '../apiConfig';


//Get locations
export const GET_LOCATIONS_LOADING = 'GET_LOCATIONS_LOADING';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE';

//Add Trip
export const ADD_TRIP_LOADING = 'ADD_TRIP_LOADING';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';



//Get locations
export const getLocationsLoading = () => {
    return {
        type: GET_LOCATIONS_LOADING
    };
};
export const getLocations = () => {
    const payload = Axios.get(locationsApi);
    return {
        type: GET_LOCATIONS,
        payload
    };
};
export const getLocationsSuccess = (locations) => {
    return {
        type: GET_LOCATIONS_SUCCESS,
        locations
    };
};
export const getLocationsFailure = (error) => {
    return {
        type: GET_LOCATIONS_FAILURE,
        error
    };
};


//Add Trip
export const addTripLoading = () => {
    return {
        type: ADD_TRIP_LOADING
    };
};
export const addTrip = (car_id, driver_id, day, all_seats, stop_points_attributes) => {
    const payload = Axios.post(newTripApi, {
        car_id,
        driver_id,
        day,
        all_seats,
        stop_points_attributes
    })
    return {
        type: ADD_TRIP,
        payload
    };
};
export const addTripSuccess = (trip) => {
    return {
        type: ADD_TRIP_SUCCESS,
        trip
    };
};
export const addTripFailure = (error) => {
    return {
        type: ADD_TRIP_FAILURE,
        error
    };
};