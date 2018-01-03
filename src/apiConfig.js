export const rootApi = 'http://localhost:3001';

// User
export const userApi = `${rootApi}/user.json`;
export const signUpApi = `${rootApi}/signup`;
export const loginApi = `${rootApi}/login`;

//get filtered trips
export const SearchApi = (day, location_id, start_time, end_time) =>{
	`${rootApi}/trips/filtered_trips?day=${day}&location_id=${location_id}
    &start_time=${start_time}&end_time=${end_time}`;
}
    
//driver's newTrip
export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;

//user's cars
export const carsApi =`${rootApi}/cars`;
// export const carApi = (user_id, car_id) => `${rootApi}/users/${user_id}/cars/${car_id}.json`;

//hitchHiker new stop point
export const hhStopPointApi = `${rootApi}/hitch-hiking`;

//driver trips
export const driverTripsApi = (id, time) => `${rootApi}/users/${id}/driver/trips?time=${time}`;

//hitch-hiker trips
export const hitchHikerTripsApi = (id, time) => `${rootApi}users/${id}/hitch-hiker/trips?time=${time}`;
