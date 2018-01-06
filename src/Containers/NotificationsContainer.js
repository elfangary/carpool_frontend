import { connect } from 'react-redux';
import Notifications from '../Components/Notifications';
import {
    getNotificationsLoading, getNotifications, getNotificationsSuccess, getNotificationsFailure
} from '../Actions/notifications';

const mapStateToProps = (state) => {
    return {
        notifications: state.notifications.notifications,
        loading: state.notifications.loading,
        error: state.notifications.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getNotifications: () => {
            dispatch(getNotificationsLoading());
            dispatch(getNotifications()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getNotificationsSuccess(response.payload.data));
                }else{
                    dispatch(getNotificationsFailure(response.payload.message));
                }
            })
        }   
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);