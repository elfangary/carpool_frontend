import Axios from 'axios';
import {LocationApi} from '../apiConfig';

export const GET_LOCATIONS_LOADING = 'GET_LOCATIONS_LOADING';
export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE';

export const getLocationsLoading = () => {
    return {
        type: GET_LOCATIONS_LOADING
    }
}
export const getLocations = () => {
    return {
        type: GET_LOCATIONS,
        payload: Axios.get(LocationApi)
    }
}
export const getLocationsSuccess = (locations) => {
    return {
        type: GET_LOCATIONS_SUCCESS,
        locations
    }
}
export const getLocationsFailure = (error) => {
    return {
        type: GET_LOCATIONS_FAILURE,
        error
    }
}
