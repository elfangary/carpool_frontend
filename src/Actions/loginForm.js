import Axios from 'axios';
import {loginApi} from '../apiConfig';

//user login
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE'; 

export const LOG_OUT = 'LOG_OUT';


//Add login
export const loginLoading = () => {
    return {
        type: LOGIN_LOADING
    };
};
export const login = (user) => {
    const payload = Axios.post(loginApi, user)
    return {
        type: LOGIN,
        payload
    };
};
export const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user
    };
};
export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    };
};
export const logout = () =>{
    return{
        type: LOG_OUT
    }

};
