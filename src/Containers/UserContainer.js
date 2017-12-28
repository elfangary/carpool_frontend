import { connect } from 'react-redux';
import User from '../Components/User';
import {
    getUserLoading, getUser, getUserSuccess, getUserFailure
} from '../Actions/user';

const mapStateToProps = (state) => {
    return {
        user: state.user.items,
        loading: state.user.loading,
        error: state.user.error
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);