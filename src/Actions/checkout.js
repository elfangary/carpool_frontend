import Axios from 'axios';
import {addChargedPointsApi} from '../apiConfig';

// Action Types
//Add points
export const ADD_CHARGE_LOADING = 'ADD_CHARGE_LOADING';
export const ADD_CHARGE = 'ADD_CHARGE';
export const ADD_CHARGE_SUCCESS = 'ADD_CHARGE_SUCCESS';
export const ADD_CHARGE_FAILURE = 'ADD_CHARGE_FAILURE';

// Action Creators
//Add points
export const addChargeLoading = () => {
    return {
        type: ADD_CHARGE_LOADING
    };
};
export const addCharge = (points) => {
    const payload = Axios.post(addChargedPointsApi, {chargedPoints: points});
    return {
        type: ADD_CHARGE,
        payload
    };
};
export const addChargeSuccess = (points) => {
    return {
        type: ADD_CHARGE_SUCCESS,
        points
    };
};
export const addChargeFailure = (error) => {
    return {
        type: ADD_CHARGE_FAILURE,
        error
    };
};