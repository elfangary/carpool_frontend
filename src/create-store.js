import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './Reducers';
import promise from 'redux-promise';


const middlewares = applyMiddleware(promise)
const composer = compose(middlewares);

export default function(){
	return createStore(rootReducer, composer);
};
