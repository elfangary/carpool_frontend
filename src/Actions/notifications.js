import Axios from 'axios';
import { notificationsApi, getNotificationApi,  updateNotificationsApi } from '../apiConfig';

// Action Types
// get All notifications
export const GET_ALL_NOTIFICATIONS_LOADING = 'GET_ALL_NOTIFICATIONS_LOADING';
export const GET_ALL_NOTIFICATIONS = 'GET_ALL_NOTIFICATIONS';
export const GET_ALL_NOTIFICATIONS_SUCCESS = 'GET_ALL_NOTIFICATIONS_SUCCESS';
export const GET_ALL_NOTIFICATIONS_FAILURE = 'GET_ALL_NOTIFICATIONS_FAILURE';

// show notification
export const GET_NOTIFICATION_LOADING = 'GET_NOTIFICATION_LOADING';
export const GET_NOTIFICATION = 'GET_NOTIFICATION';
export const GET_NOTIFICATION_SUCCESS = 'GET_NOTIFICATION_SUCCESS';
export const GET_NOTIFICATION_FAILURE = 'GET_NOTIFICATION_FAILURE';

//update notification
export const UPDATE_NOTIFICATION_LOADING = 'UPDATE_NOTIFICATION_LOADING';
export const UPDATE_NOTIFICATION = 'UPDATE_NOTIFICATION';
export const UPDATE_NOTIFICATION_SUCCESS = 'UPDATE_NOTIFICATION_SUCCESS';
export const UPDATE_NOTIFICATION_FAILURE = 'UPDATE_NOTIFICATION_FAILURE';

// Action Creators
// Get All notifications
export const getAllNotificationsLoading = () => {
    return {
        type: GET_ALL_NOTIFICATIONS_LOADING
    };
};
export const getAllNotifications = () => {
    const payload = Axios.get(notificationsApi);
    return {
        type: GET_ALL_NOTIFICATIONS,
        payload
    };
};
export const getAllNotificationsSuccess = (notifications) => {
    return {
        type: GET_ALL_NOTIFICATIONS_SUCCESS,
        notifications
    };
};
export const getAllNotificationsFailure = (error) => {
    return {
        type: GET_ALL_NOTIFICATIONS_FAILURE,
        error
    };
};

//show notification
export const getNotificationLoading = () => {
    return {
        type: GET_NOTIFICATION_LOADING
    };
};
export const getNotification = (id) => {
    const payload = Axios.get(getNotificationApi(id));
    return {
        type: GET_NOTIFICATION,
        payload
    };
};
export const getNotificationSuccess = (notification) => {
    return {
        type: GET_NOTIFICATION_SUCCESS,
        notification
    };
};
export const getNotificationFailure = (error) => {
    return {
        type: GET_NOTIFICATION_FAILURE,
        error
    };
};

//update notification
export const updateNotificationLoading = () => {
    return {
        type: UPDATE_NOTIFICATION_LOADING
    };
};
export const updateNotification = (id, notification) => {
    const payload = Axios.patch(updateNotificationsApi(id), notification);
    return {
        type: UPDATE_NOTIFICATION,
        payload
    };
};
export const updateNotificationSuccess = (notification) => {
    return {
        type: UPDATE_NOTIFICATION_SUCCESS,
        notification
    };
};
export const updateNotificationFailure = (error) => {
    return {
        type: UPDATE_NOTIFICATION_FAILURE,
        error
    };
};