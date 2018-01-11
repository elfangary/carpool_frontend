import {
    GET_ALL_NOTIFICATIONS_LOADING, GET_ALL_NOTIFICATIONS_SUCCESS, GET_ALL_NOTIFICATIONS_FAILURE,
    GET_NOTIFICATION_LOADING, GET_NOTIFICATION_SUCCESS, GET_NOTIFICATION_FAILURE,
    CREATE_NOTIFICATION_LOADING, CREATE_NOTIFICATION_SUCCESS, CREATE_NOTIFICATION_FAILURE,
    UPDATE_NOTIFICATION_LOADING, UPDATE_NOTIFICATION_SUCCESS, UPDATE_NOTIFICATION_FAILURE
} from '../Actions/notifications';

const INITIAL_STATE = {
    notifications: [],
    loading: false,
    error: null
}

export default function(currentState = INITIAL_STATE, action){
	switch (action.type){
		case GET_ALL_NOTIFICATIONS_LOADING:
            return {...currentState, loading: true};
        case GET_ALL_NOTIFICATIONS_SUCCESS:
            return {...currentState, notifications: action.notifications, loading: false};
        case GET_ALL_NOTIFICATIONS_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case CREATE_NOTIFICATION_LOADING:
            return {...currentState, loading: true};
        case CREATE_NOTIFICATION_SUCCESS:
            return {...currentState, notifications: [...currentState.notifications, action.notification], loading: false};
        case CREATE_NOTIFICATION_FAILURE:
            return {...currentState, error: action.error, loading: false};

        case UPDATE_NOTIFICATION_LOADING:
            var newNotifications = currentState.notifications.map((notification) => {
                if(notification.id == action.id){
                    notification.loading = true;
                    return notification;
                }
            })
            return {...currentState, notifications: newNotifications};
        case UPDATE_NOTIFICATION_SUCCESS:
            var newNotifications = currentState.notifications.map((notification) => {
                if(notification.id == action.id){
                    notification = action.notification
                }
            })
            return {...currentState, notifications: newNotifications, loading: false};
        case UPDATE_NOTIFICATION_FAILURE:
            return {...currentState, error: action.error, loading: false};
        default:
            return currentState;
	};
};