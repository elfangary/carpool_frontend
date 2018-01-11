import Axios from 'axios';
import { userApi } from '../apiConfig';

// Action Types
// Get user details
export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

//Update User points
export const DECREMENT_USER_POINTS = 'DECREMENT_USER_POINTS';
export const INCREMENT_USER_POINTS = 'INCREMENT_USER_POINTS';


// Action Creators
// Get user details
export const getUserLoading = () => {
    return {
        type: GET_USER_LOADING
    };
};
export const getUser = () => {
    const payload = Axios.get(userApi);
    return {
        type: GET_USER,
        payload
    };
};
export const getUserSuccess = (user) => {
    return {
        type: GET_USER_SUCCESS,
        user
    };
};
export const getUserFailure = (error) => {
    return {
        type: GET_USER_FAILURE,
        error
    };
};

export const decrementUserPoints = (amount) => {
    return {
        type: DECREMENT_USER_POINTS,
        amount
    };
};
export const incrementUserPoints = (amount) => {
    return {
        type: INCREMENT_USER_POINTS,
        amount
    }
}