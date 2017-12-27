import { connect } from 'react-redux';
import User from '../components/Users';
import { getUserLoading, getUser, getUserSuccess, getUserFailure } from '../actions/users';

const mapStateToProps = (state) => {
    return {
        user: state.user.items,
        loading: state.user.loading,
        error: state.user.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUser: (id) => {
            dispatch(getUserLoading());
            
            dispatch(getUser(id)).then(response => {
                if(response.payload.status < 400){
                    dispatch(getUserSuccess(response.payload.data));
                    console.log("hiii");
                    console.log(response.payload.data);
                }else{
                    dispatch(getUserFailure(response.payload.message));
                }
            })
          
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);