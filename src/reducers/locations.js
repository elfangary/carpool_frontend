import { GET_LOCATIONS, GET_LOCATIONS_SUCCESS, GET_LOCATIONS_FAILURE } from '../actions/locations';

const INITIAL_STATE = {
    locations: [],
    error: null
}

export default function(currentState = INITIAL_STATE, action){
    switch (action.type) {
        case GET_LOCATIONS:
            return {
                ...currentState,
            }
        case GET_LOCATIONS_SUCCESS:
            return {
                ...currentState,
                locations: action.data,
                error: null
            }
        case GET_LOCATIONS_FAILURE:
            return {
                ...currentState,
                error: action.error
            }
        default:
            return currentState;
    }
}