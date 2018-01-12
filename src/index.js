import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Router} from 'react-router-dom';
import history from './history';
import createStore from './create-store';
import {Provider} from 'react-redux';
import setAuthenticationToken from './utils/authentication_token';
import { setCurrentUser } from './Actions/loginForm';

const store = createStore();

setAuthenticationToken(localStorage.jwtToken);

ReactDOM.render(<Provider store={store}><Router history={history}><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

