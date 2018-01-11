import { ADD_RATE_LOADING, ADD_RATE_SUCCESS, ADD_RATE_FAILURE } from '../Actions/rating';

const INITIAL_STATE = {
    Ratings: [],
    loading: false,
    error: null
};

export default function(current_state = INITIAL_STATE, action){
    switch(action.type) {
        case ADD_RATE_LOADING:
            return {
                ...current_state,
                loading: true
            };
            break;
        case ADD_RATE_SUCCESS:
            return {
                ...current_state,
                Ratings: action.Ratings,
                loading: false
            };
            break;
        case ADD_RATE_FAILURE:
            return {
                ...current_state,
                loading: false,
                error: action.error
            };
            break;
        default :
            return current_state;
    }
};