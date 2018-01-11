import Axios from 'axios';
import {signUpApi} from '../apiConfig';


//user signUp
export const SIGNUP_LOADING = 'SIGNUP_LOADING';
export const SIGNUP = 'SIGNUP';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';


//user signUp
export const signUpLoading = () => {
    return {
        type: SIGNUP_LOADING
    };
};
export const signUp = (user) => {
    const payload = Axios.post(signUpApi, user)
    return {
        type: SIGNUP,
        payload
    };
};
export const signUpSuccess = (user) => {
    return {
        type: SIGNUP_SUCCESS,
        user
    };
};
export const signUpFailure = (error) => {
    return {
        type: SIGNUP_FAILURE,
        error
    };
};