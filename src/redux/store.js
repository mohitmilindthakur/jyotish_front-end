import {createStore, applyMiddleware} from 'redux';

import rootReducer from './rootReducer';

import logger from 'redux-logger';

import thunk from 'redux-thunk'

let middlewares = [thunk, logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;