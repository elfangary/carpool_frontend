import Axios from 'axios';
import { userApi, updateUserApi } from '../apiConfig';

// Action Types
// Get user details
export const GET_USER_LOADING = 'GET_USER_LOADING';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// Update user details
export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

// export const DECREMENT_USER_POINTS_LOADING = 'DECREMENT_USER_POINTS_LOADING';
export const DECREMENT_USER_POINTS = 'DECREMENT_USER_POINTS';
// export const DECREMENT_USER_POINTS_SUCCESS = 'DECREMENT_USER_POINTS_SUCCESS';
// export const DECREMENT_USER_POINTS_FAILURE = 'DECREMENT_USER_POINTS_FAILURE';


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

// Update user details
export const updateUserLoading = () => {
    return {
        type: UPDATE_USER_LOADING
    };
};
export const updateUser = (user) => {
    const payload = Axios.patch(updateUserApi, user);
    return {
        type: UPDATE_USER,
        payload
    };
};
export const updateUserSuccess = (user) => {
    return {
        type: UPDATE_USER_SUCCESS,
        user
    };
};
export const updateUserFailure = (error) => {
    return {
        type: UPDATE_USER_FAILURE,
        error
    };
};

//Update user points
// export const decrementUserPointsLoading = () => {
//     return {
//         type: DECREMENT_USER_POINTS_LOADING
//     };
// };
export const decrementUserPoints = (amount) => {
    return {
        type: DECREMENT_USER_POINTS,
        amount
    };
};
// export const decrementUserPointsSuccess =

