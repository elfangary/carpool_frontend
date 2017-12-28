export const root = 'http://localhost:3001';
export const LocationApi = `${root}/locations`;
export const SearchApi = (day, location_id, start_time, end_time) =>
    `${root}/trips/filtered_trips?day=${day}&location_id=${location_id}
    &start_time=${start_time}&end_time=${end_time}`;