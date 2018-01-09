import { connect } from 'react-redux';
import User from '../Components/User';
import { getUserLoading, getUser, getUserSuccess, getUserFailure } from '../Actions/user';
import { updateNotificationLoading, updateNotification, updateNotificationSuccess, updateNotificationFailure }
 from '../Actions/notifications';
import { logout } from '../Actions/loginForm';

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        points: state.user.points,
        loading: state.user.loading,
        error: state.user.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: () => {
            dispatch(getUserLoading());
            setTimeout(() => {
                dispatch(getUser()).then(response => {
                    if(response.payload.status < 400){
                        dispatch(getUserSuccess(response.payload.data));
                    }else{
                        dispatch(getUserFailure(response.payload.response.data.message));
                    }
                })
            }, 2000)
        },
        logout: function(){
            localStorage.removeItem('jwtToken');
            dispatch(logout());
        },
        updateNotification: (notification) => {
            dispatch(updateNotificationLoading());
            dispatch(updateNotification(notification)).then(response => {
                if(response.payload.status < 400){
                    dispatch(updateNotificationSuccess(response.payload.data));
                }else{
                    dispatch(updateNotificationFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);