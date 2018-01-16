import Axios from 'axios';
import {newTripApi} from '../apiConfig';
import {carsApi} from '../apiConfig';

// Action Types
//Add Trip
export const ADD_TRIP_LOADING = 'ADD_TRIP_LOADING';
export const ADD_TRIP = 'ADD_TRIP';
export const ADD_TRIP_SUCCESS = 'ADD_TRIP_SUCCESS';
export const ADD_TRIP_FAILURE = 'ADD_TRIP_FAILURE';

//create A car
export const ADD_CAR_LOADING = 'ADD_CAR_LOADING';
export const ADD_CAR = 'ADD_CAR';
export const ADD_CAR_SUCCESS = 'ADD_CAR_SUCCESS';
export const ADD_CAR_FAILURE = 'ADD_CAR_FAILURE';


// Action Creators
//Add Trip
export const addTripLoading = () => {
    return {
        type: ADD_TRIP_LOADING
    };
};
export const addTrip = (car_id, day, all_seats, specific_gender, smoking, stop_points_attributes, timeInSeconds) => {
    const payload = Axios.post(newTripApi, {
        car_id,
        day,
        all_seats,
        specific_gender,
        smoking,
        stop_points_attributes,
        time_in_seconds: timeInSeconds
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

//Create Car
export const addCarLoading = () => {
    return {
        type: ADD_CAR_LOADING
    };
};
export const addCar = (newCar) => {
    return {
        type: ADD_CAR,
        payload: Axios.post(carsApi, newCar)
    };
};
export const addCarSuccess = (newCar) => {
    return {
        type: ADD_CAR_SUCCESS,
        newCar
    };
};
export const addCarFailure = (error) => {
    return {
        type: ADD_CAR_FAILURE,
        error
    };
};
