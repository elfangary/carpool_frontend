export const rootApi = 'http://localhost:3001';

//Admin
export const adminSignupApi = `${rootApi}/admin/signup`;
export const adminLoginApi = `${rootApi}/admin/login`;

// User
export const userApi = `${rootApi}/user.json`;
export const signUpApi = `${rootApi}/signup`;
export const loginApi = `${rootApi}/login`;
export const updateUserApi = `${rootApi}/user/update`;

//get filtered trips
export const SearchApi = (day, location_id_start, location_id_end, start_time, end_time) =>{
	return `${rootApi}/trips/filtered_trips?day=${day}&location_id_start=${location_id_start}&location_id_end=${location_id_end}
    &start_time=${start_time}&end_time=${end_time}`;
}

//Driver's newTrip
export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;

//Cars
export const carsApi =`${rootApi}/cars`;
export const oneCarApi = (id) => `${rootApi}/cars/${id}`;

//hitchHiker new stop point
export const hhStopPointApi = `${rootApi}/hitch-hiking`;

//driver trips
export const driverTripsApi = (time) => `${rootApi}/driver/trips.json?time=${time}`;

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

//Rating user
export const userRatingApi = (user_id, rate) => `${rootApi}/add_rate?user_id=${user_id}&rate=${rate}`;

//change trip status
export const tripStatusApi = (trip_id, status) => `${rootApi}/trip_status?trip_id=${trip_id}&status=${status}`;

