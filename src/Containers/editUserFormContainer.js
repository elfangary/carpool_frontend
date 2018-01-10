import { connect } from 'react-redux';
import EditUserForm from '../Components/EditUserForm';

import {getUserLoading, getUser, getUserSuccess, getUserFailure,
    updateUserLoading, updateUser, updateUserSuccess, updateUserFailure } from '../Actions/user';

const mapStateToProps = (state) => {
    return {
        user: state.user.user,
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
            }, 2000);
        },
    	updateUser: (user) =>{
            dispatch(updateUserLoading());
            dispatch(updateUser(user)).then(response =>{
                if(response.payload.status < 400){
                    dispatch(updateUserSuccess(response.payload.data));
                }else{
                    dispatch(updateUserFailure(response.payload.response.data.message));
                }
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditUserForm);