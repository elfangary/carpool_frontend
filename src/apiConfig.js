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
export const hhStopPointApi = `${rootApi}/hh_stop_points`;
//update hh stop point
export const updateHhStopApi = (id, confirm) => `${rootApi}/hh_stop_points/${id}?confirm=${confirm}`;


//driver trips
export const driverTripsApi = (time) => `${rootApi}/driver/trips.json?time=${time}`;

//change trip status
export const tripStatusApi = (trip_id, status) => `${rootApi}/trips/${trip_id}?status=${status}`;

//hitch-hiker trips
export const hitchHikerTripsApi = (time) => `${rootApi}/hitch-hiker/trips.json?time=${time}`;

//payment-charge
export const chargeApi = `${rootApi}/charges`;
export const addChargedPointsApi = `${rootApi}/add_charged_points`;

//Notification
export const notificationsApi = `${rootApi}/notifications.json`;
export const getNotificationApi = (id) => `${rootApi}//notifications/${id}.json`;
export const updateNotificationsApi = (id) => `${rootApi}/notifications/${id}.json`;

//rating user
export const userRatingApi = `${rootApi}/rate_user`;

//add balance to driver
// export const addBalanceToDriverApi = (trip_id) => `${rootApi}/add_to_driver?trip_id=${trip_id}`

//add balance to hh
export const addBalanceToHhApi = (hh_stop_point_id) => `${rootApi}/add_to_hh?hh_stop_point_id=${hh_stop_point_id}`

