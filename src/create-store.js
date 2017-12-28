import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducers';
import promise from 'redux-promise';
import logger from 'redux-logger';


const middlewares = applyMiddleware(promise)
const composer = compose(middlewares);

export default function(){
	return createStore(rootReducer, composer);
};
