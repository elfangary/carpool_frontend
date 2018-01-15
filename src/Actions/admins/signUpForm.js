import Axios from 'axios';
import {adminSignupApi} from '../../apiConfig';

// Action Types
//Admin signUp
export const ADMIN_SIGNUP_LOADING = 'ADMIN_SIGNUP_LOADING';
export const ADMIN_SIGNUP = 'ADMIN_SIGNUP';
export const ADMIN_SIGNUP_SUCCESS = 'ADMIN_SIGNUP_SUCCESS';
export const ADMIN_SIGNUP_FAILURE = 'ADMIN_SIGNUP_FAILURE';

// Action Creators
//Admin signUp
export const adminSignUpLoading = () => {
    return {
        type: ADMIN_SIGNUP_LOADING
    };
};
export const adminSignUp = (admin) => {
    const payload = Axios.post(adminSignupApi, admin)
    return {
        type: ADMIN_SIGNUP,
        payload
    };
};
export const adminSignUpSuccess = (admin) => {
    return {
        type: ADMIN_SIGNUP_SUCCESS,
        admin
    };
};
export const adminSignUpFailure = (error) => {
    return {
        type: ADMIN_SIGNUP_FAILURE,
        error
    };
};