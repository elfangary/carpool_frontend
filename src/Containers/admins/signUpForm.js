import { connect } from 'react-redux';
import SignUpForm from '../../Components/admins/SignUpForm';
import {
    adminSignUpLoading, adminSignUp, adminSignUpSuccess, adminSignUpFailure
} from '../../Actions/admins/signUpForm';

const mapStateToProps = (state) => {
    return {
        admin: state.admin_signUp.admin,
        loading: state.admin_signUp.loading,
        error: state.admin_signUp.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminSignUp: (admin) => {
            dispatch(adminSignUpLoading());
            dispatch(adminSignUp(admin)).then(response => {
                if(response.payload.status < 400){
                    dispatch(adminSignUpSuccess(response.payload.data));
                }else{
                    dispatch(adminSignUpFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);