import { combineReducers } from 'redux';
import locationsReducer from './locations';

const rootReducer = combineReducers({
    locations: locationsReducer
})

export default rootReducer;