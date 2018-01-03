import { connect } from 'react-redux';
import User from '../Components/User';
import {
    getUserLoading, getUser, getUserSuccess, getUserFailure
} from '../Actions/user';
import { logout } from '../Actions/loginForm';

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
        loading: state.user.loading,
        error: state.user.error,
        user_id: state.login.user.id
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(getUserLoading());
            dispatch(getUser(id)).then(response => {
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