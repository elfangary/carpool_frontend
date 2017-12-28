import { combineReducers } from 'redux';
import locationsReducer from './locations';
import HhFormReducer from './hhForm';

const rootReducer = combineReducers({
    locations: locationsReducer,
    filteredTrips: HhFormReducer
});

export default rootReducer;