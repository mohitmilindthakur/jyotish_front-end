import {createStore, applyMiddleware} from 'redux';

import rootReducer from './rootReducer';

import logger from 'redux-logger';

let middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;