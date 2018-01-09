import Axios from 'axios';
import {carsApi, oneCarApi} from '../apiConfig';


//Get all Cars
export const GET_ALL_CARS_LOADING = 'GET_ALL_CARS_LOADING';
export const GET_ALL_CARS = 'GET_ALL_CARS';
export const GET_ALL_CARS_SUCCESS = 'GET_ALL_CARS_SUCCESS';
export const GET_ALL_CARS_FAILURE = 'GET_ALL_CARS_FAILURE';

//Create Car
export const CREATE_CAR_LOADING = 'CREATE_CAR_LOADING';
export const CREATE_CAR = 'CREATE_CAR';
export const CREATE_CAR_SUCCESS = 'CREATE_CAR_SUCCESS';
export const CREATE_CAR_FAILURE = 'CREATE_CAR_FAILURE';

//Delete car
export const DELETE_CAR_LOADING = 'DELETE_CAR_LOADING';
export const DELETE_CAR = 'DELETE_CAR';
export const DELETE_CAR_SUCCESS = 'DELETE_CAR_SUCCESS';
export const DELETE_CAR_FAILURE = 'DELETE_CAR_FAILURE';


//Get cars
export const getCarsLoading = () => {
    return {
        type: GET_ALL_CARS_LOADING
    };
};
export const getCars = () => {
    const payload = Axios.get(carsApi);
    return {
        type: GET_ALL_CARS,
        payload
    };
};
export const getCarsSuccess = (cars) => {
    return {
        type: GET_ALL_CARS_SUCCESS,
        cars
    };
};
export const getCarsFailure = (error) => {
    return {
        type: GET_ALL_CARS_FAILURE,
        error
    };
};

//Create car
export const createCarLoading = () => {
    return {
        type: CREATE_CAR_LOADING
    };
};
export const createCar = (car) => {
    const payload = Axios.post(carsApi, car);
    return {
        type: CREATE_CAR,
        payload
    };
};
export const createCarSuccess = (car) => {
    return {
        type: CREATE_CAR_SUCCESS,
        car
    };
};
export const createCarFailure = (error) => {
    return {
        type: CREATE_CAR_FAILURE,
        error
    };
};

//Delete car
export const deleteCarLoading = (id) => {
    return {
        type: DELETE_CAR_LOADING
    };
};
export const deleteCar = (id) => {
    const payload = Axios.delete(oneCarApi(id));
    return {
        type: DELETE_CAR,
        payload
    };
};
export const deleteCarSuccess = (id) => {
    return {
        type: DELETE_CAR_SUCCESS,
        id
    };
};
export const deleteCarFailure = (id) => {
    return {
        type: DELETE_CAR_FAILURE,
        id
    };
};

