import Axios from 'axios';
import {newTripApi} from '../apiConfig';


//Add Trip
export const ADD_TRIP_LOADING = 'ADD_TRIP_LOADING';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';



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