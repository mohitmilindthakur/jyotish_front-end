import {combineReducers} from 'redux';

import birthDetailsReducer from './birthDetails/birthDetails.reducer';
import kundaliReducer from './kundali/kundali.reducer';
import visibleChartsReducer from './visibleCharts/visibleCharts.reducer'

const rootReducer = combineReducers({
    birthDetails: birthDetailsReducer,
    kundali: kundaliReducer,
    visibleCharts: visibleChartsReducer
})

export default rootReducer;