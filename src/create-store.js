import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import promise from 'redux-promise';

const middlewares = applyMiddleware(promise);

export default function(){
    return createStore(rootReducer, middlewares);
}