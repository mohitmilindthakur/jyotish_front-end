import {combineReducers} from 'redux';

import birthDetailsReducer from './birthDetails/birthDetails.reducer';
import kundaliReducer from './kundali/kundali.reducer';

const rootReducer = combineReducers({
    birthDetails: birthDetailsReducer,
    kundali: kundaliReducer
})

export default rootReducer;