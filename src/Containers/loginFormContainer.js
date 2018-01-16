import { connect } from 'react-redux';
import Login from '../Components/Login';
import { loginLoading, login, loginSuccess, loginFailure } from '../Actions/loginForm';
import set_authentication_token from '../utils/authentication_token';
import history from '../history';
import swal from 'sweetalert';

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
                if(response.payload.status < 400){
                    const token = response.payload.data.auth_token;
                    localStorage.setItem('jwtToken', token);
                    set_authentication_token(token)
                    dispatch(loginSuccess(response.payload.data.user));
                    history.push('/');
                }else{
                    dispatch(loginFailure(response.payload.response.data.message));
                }
            })
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);