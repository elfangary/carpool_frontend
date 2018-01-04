import { connect } from 'react-redux';
import User from '../Components/User';
import {
    getUserLoading, getUser, getUserSuccess, getUserFailure
} from '../Actions/user';
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
            dispatch(getUser()).then(response => {
                if(response.payload.status < 400){
                    dispatch(getUserSuccess(response.payload.data));
                }else{
                    dispatch(getUserFailure(response.payload.message));
                }
            })
        },
        logout: function(){
            localStorage.removeItem('jwtToken');
            dispatch(logout());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);