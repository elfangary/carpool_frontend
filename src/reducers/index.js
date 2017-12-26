import { combineReducers } from 'redux';
import locationsReducer from './locations';
import carsReducer from './cars';
import driverReducer from './driver';



const rootReducer = combineReducers({
    locations: locationsReducer,
    userCars: carsReducer,
    newTrip: driverReducer
})

export default rootReducer;