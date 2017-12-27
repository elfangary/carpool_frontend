export const rootApi = 'http://localhost:3001';


// User
export const userApi = (id) => `${rootApi}/users/${id}.json`;



//driver's newTrip
export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;

//user's cars
export const carsApi = (user_id) => `${rootApi}/users/${user_id}/cars`;
// export const carApi = (user_id, car_id) => `${rootApi}/users/${user_id}/cars/${car_id}.json`;
