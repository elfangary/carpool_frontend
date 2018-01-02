import { connect } from 'react-redux';
import Login from '../Components/Login';
import { loginLoading, login, loginSuccess, loginFailure, setCurrentUser } from '../Actions/loginForm';
import set_authentication_token from '../utils/authentication_token';

const mapStateToProps = (state) => {
    return {
        user: state.login.items,
        loading: state.login.loading,
        error: state.login.error,
        loggedIn: state.login.loggedIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (user) => {
            dispatch(loginLoading());
            dispatch(login(user)).then(response => {
                const token = response.payload.data.auth_token;
                localStorage.setItem('jwtToken', token);
                localStorage.setItem('user_id', response.payload.data.user.id);
                set_authentication_token(token)
                if(response.payload.status < 400){
                    dispatch(loginSuccess(response.payload.data.user));
                }else{

                    dispatch(loginFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);