import { connect } from 'react-redux';
import Login from '../../Components/admins/LoginForm';
import { adminLoginLoading, adminLogin, adminLoginSuccess, adminLoginFailure } from '../../Actions/admins/loginForm';
import set_authentication_token from '../../utils/authentication_token';

const mapStateToProps = (state) => {
    return {
        admin: state.admin_login.items,
        loading: state.admin_login.loading,
        error: state.admin_login.error,
        loggedIn: state.admin_login.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        adminLogin: (admin) => {
            dispatch(adminLoginLoading());
            dispatch(adminLogin(admin)).then(response => {
                if(response.payload.status < 400){
                    const token = response.payload.data.auth_token;
                    localStorage.setItem('jwtToken', token);
                    set_authentication_token(token)
                    dispatch(adminLoginSuccess(response.payload.data.admin));
                }else{
                    dispatch(adminLoginFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);