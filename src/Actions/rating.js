import Axios from 'axios';
import { userRatingApi } from '../apiConfig';

export const ADD_RATE_LOADING = 'ADD_RATE_LOADING';
export const ADD_RATE = 'ADD_RATE';
export const ADD_RATE_SUCCESS = 'ADD_RATE_SUCCESS';
export const ADD_RATE_FAILURE = 'ADD_RATE_FAILURE';

export const addRateLoading = () => {
    return {
        type: ADD_RATE_LOADING
    };
};
export const addRate = (user_id, rate) => {
    return {
        type: ADD_RATE,
        payload: Axios.patch(userRatingApi(user_id, rate))
    };
};
export const addRateSuccess = (rate) => {
    return {
        type: ADD_RATE_SUCCESS,
        rate
    };
};
export const addRateFailure = (error) => {
    return {
        type: ADD_RATE_FAILURE,
        error
    };
};