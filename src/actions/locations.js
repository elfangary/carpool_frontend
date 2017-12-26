import Axios from 'axios';
import {LocationApi} from '../apiConfig';

export const GET_LOCATIONS = 'GET_LOCATIONS';
export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_LOCATIONS_FAILURE = 'GET_LOCATIONS_FAILURE';
export const SELECT_LOCATION = 'SELECT_LOCATION';

export function getLocations(){
    return {
        type: GET_LOCATIONS,
        payload: Axios.get(LocationApi)
    }
}
export function getLocationsSuccess(response){
    return {
        type: GET_LOCATIONS_SUCCESS,
        data: response.payload.data
    }
}
export function getLocationsFailure(error){
    return {
        type: GET_LOCATIONS_FAILURE,
        error
    }
}
