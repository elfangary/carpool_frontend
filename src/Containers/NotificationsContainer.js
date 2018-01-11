import { connect } from 'react-redux';
import Notifications from '../Components/Notifications';
import {
    getAllNotificationsLoading, getAllNotifications, getAllNotificationsSuccess, getAllNotificationsFailure
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
        getAllNotifications: () => {
            dispatch(getAllNotificationsLoading());
            dispatch(getAllNotifications()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getAllNotificationsSuccess(response.payload.data));
                }else{
                    dispatch(getAllNotificationsFailure(response.payload.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);