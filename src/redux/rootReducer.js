import {combineReducers} from 'redux';

import birthDetailsReducer from './birthDetails/birthDetails.reducer';

const rootReducer = combineReducers({
    birthDetails: birthDetailsReducer
})

export default rootReducer;