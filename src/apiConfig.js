export const rootApi = 'http://localhost:3001';


//get filtered trips
export const SearchApi = (day, location_id, start_time, end_time) =>
    `${rootApi}/trips/filtered_trips?day=${day}&location_id=${location_id}
    &start_time=${start_time}&end_time=${end_time}`;

// User
export const userApi = (id) => `${rootApi}/users/${id}.json`;
export const signUpApi = `${rootApi}/signup`;
export const loginApi = `${rootApi}/login`;

//driver's newTrip
export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;

//user's cars
export const carsApi = (user_id) => `${rootApi}/users/${user_id}/cars`;
// export const carApi = (user_id, car_id) => `${rootApi}/users/${user_id}/cars/${car_id}.json`;
