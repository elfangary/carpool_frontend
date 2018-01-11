import Axios from 'axios';
import {carsApi} from '../apiConfig';


//Get cars
export const GET_CARS_LOADING = 'GET_CARS_LOADING';
export const GET_CARS = 'GET_CARS';
export const GET_CARS_SUCCESS = 'GET_CARS_SUCCESS';
export const GET_CARS_FAILURE = 'GET_CARS_FAILURE';


//Get cars
export const getCarsLoading = () => {
    return {
        type: GET_CARS_LOADING
    };
};
export const getCars = () => {
    const payload = Axios.get(carsApi);
    return {
        type: GET_CARS,
        payload
    };
};
export const getCarsSuccess = (cars) => {
    return {
        type: GET_CARS_SUCCESS,
        cars
    };
};
export const getCarsFailure = (error) => {
    return {
        type: GET_CARS_FAILURE,
        error
    };
};