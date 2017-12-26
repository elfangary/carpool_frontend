export const rootApi = 'http://localhost:3001';

export const newTripApi = `${rootApi}/trips.json`;
export const locationsApi = `${rootApi}/locations`;
export const carsApi = (id) => `${rootApi}/users/${id}/cars`;
