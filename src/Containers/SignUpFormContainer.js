import { connect } from 'react-redux';
import SignUpForm from '../Components/SignUpForm';
import {
    signUpLoading, signUp, signUpSuccess, signUpFailure
} from '../Actions/signUpForm';

const mapStateToProps = (state) => {
    return {
        user: state.signUp.items,
        loading: state.signUp.loading,
        error: state.signUp.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (user) => {
            dispatch(signUpLoading());
            dispatch(signUp(user)).then(response => {
                if(response.payload.status < 400){
                    dispatch(signUpSuccess(response.payload.data));
                }else{
                    dispatch(signUpFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);