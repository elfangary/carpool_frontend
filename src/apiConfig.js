export const rootApi = 'http://localhost:3001';

// User
export const userApi = `${rootApi}/user.json`;
export const signUpApi = `${rootApi}/signup`;
export const loginApi = `${rootApi}/login`;

//get filtered trips
export const SearchApi = (day, location_id, start_time, end_time) =>{
	return `${rootApi}/trips/filtered_trips?day=${day}&location_id=${location_id}
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
export const driverTripsApi = (time) => `${rootApi}/driver/trips?time=${time}`;

//hitch-hiker trips
export const hitchHikerTripsApi = (time) => `${rootApi}/hitch-hiker/trips?time=${time}`;

//update hh stop point
export const updateHhStopApi = (confirm) => `${rootApi}/hitch-hicker-point-update?confirm=${confirm}`;

//payment-charge
export const chargeApi = `${rootApi}/charges`;
export const addChargedPointsApi = `${rootApi}/add_charged_points`;

//Notification
export const notificationsApi = `${rootApi}/notifications.json`;
