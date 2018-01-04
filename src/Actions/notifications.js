import Axios from 'axios';
import { notificationsApi } from '../apiConfig';

// Action Types
// Get user details
export const GET_NOTIFICATIONS_LOADING = 'GET_NOTIFICATIONS_LOADING';
export const GET_NOTIFICATIONS = 'GET_NOTIFICATIONS';
export const GET_NOTIFICATIONS_SUCCESS = 'GET_NOTIFICATIONS_SUCCESS';
export const GET_NOTIFICATIONS_FAILURE = 'GET_NOTIFICATIONS_FAILURE';

// Action Creators
// Get user details
export const getNotificationsLoading = () => {
    return {
        type: GET_NOTIFICATIONS_LOADING
    };
};
export const getNotifications = () => {
    const payload = Axios.get(notificationsApi);
    return {
        type: GET_NOTIFICATIONS,
        payload
    };
};
export const getNotificationsSuccess = (Notifications) => {
    return {
        type: GET_NOTIFICATIONS_SUCCESS,
        Notifications
    };
};
export const getNotificationsFailure = (error) => {
    return {
        type: GET_NOTIFICATIONS_FAILURE,
        error
    };
};