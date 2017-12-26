export const rootApi = `http://localhost:3001`;

// Users
export const userApi = (id) => `${rootApi}/users/${id}.json`;

//user Cars
export const carsApi = (user_id) => `${rootApi}/users/${user_id}/cars.json`;
export const carApi = (user_id, id) => `${rootApi}/users/${user_id}/cars/${id}.json`;