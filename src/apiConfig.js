export const rootApi = 'http://localhost:3001';

//Admin
export const adminSignupApi = `${rootApi}/admin/signup`;
export const adminLoginApi = `${rootApi}/admin/login`;

// User
export const userApi = `${rootApi}/user.json`;
export const signUpApi = `${rootApi}/signup`;
export const loginApi = `${rootApi}/login`;
export const updateUserApi = `${rootApi}/user/update`;

//get Filtered Trips
export const SearchApi = (day, location_id, start_time, end_time) =>{
	return `${rootApi}/trips/filtered_trips?day=${day}&location_id=${location_id}
    &start_time=${start_time}&end_time=${end_time}`;
}

//Driver's newTrip
export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;

//Cars
export const carsApi =`${rootApi}/cars`;
export const oneCarApi = (id) => `${rootApi}/cars/${id}`;
// export const carApi = (user_id, car_id) => `${rootApi}/users/${user_id}/cars/${car_id}.json`;

//hitchHiker new stop point
export const hhStopPointApi = `${rootApi}/hitch-hiking`;

//driver trips
export const driverTripsApi = (time) => `${rootApi}/driver/trips?time=${time}`;

//hitch-hiker trips
export const hitchHikerTripsApi = (time) => `${rootApi}/hitch-hiker/trips?time=${time}`;

//update hh stop point
export const updateHhStopApi = (id, confirm) => `${rootApi}/hitch-hicker-point-update?id=${id}&confirm=${confirm}`;

//payment-charge
export const chargeApi = `${rootApi}/charges`;
export const addChargedPointsApi = `${rootApi}/add_charged_points`;

//Notification
export const notificationsApi = `${rootApi}/notifications.json`;
export const getNotificationApi = (id) => `${rootApi}//notifications/${id}.json`;
export const updateNotificationsApi = (id) => `${rootApi}/notifications/${id}.json`;
