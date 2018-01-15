import Axios from 'axios';
import { adminLoginApi } from '../../apiConfig';

// Action Types
//Admin login
export const ADMIN_LOGIN_LOADING = 'ADMIN_LOGIN_LOADING';
export const ADMIN_LOGIN = 'ADMIN_LOGIN';
export const ADMIN_LOGIN_SUCCESS = 'ADMIN_LOGIN_SUCCESS';
export const ADMIN_LOGIN_FAILURE = 'ADMIN_LOGIN_FAILURE'; 
export const ADMIN_LOG_OUT = 'ADMIN_LOG_OUT';

// Action Creators
//Add login
export const adminLoginLoading = () => {
    return {
        type: ADMIN_LOGIN_LOADING
    };
};
export const adminLogin = (admin) => {
    const payload = Axios.post(adminLoginApi, admin)
    return {
        type: ADMIN_LOGIN,
        payload
    };
};
export const adminLoginSuccess = (admin) => {
    return {
        type: ADMIN_LOGIN_SUCCESS,
        admin
    };
};
export const adminLoginFailure = (error) => {
    return {
        type: ADMIN_LOGIN_FAILURE,
        error
    };
};
export const adminLogout = () =>{
    return{
        type: ADMIN_LOG_OUT
    }
};
