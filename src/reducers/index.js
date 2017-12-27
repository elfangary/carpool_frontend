import { combineReducers } from 'redux';
import locationsReducer from './locations';
import carsReducer from './cars';
import driverReducer from './driver';
import userReducer from './user';



const rootReducer = combineReducers({
    locations: locationsReducer,
    userCars: carsReducer,
    newTrip: driverReducer,
    user: userReducer
})

export default rootReducer;