import {combineReducers} from 'redux';

import birthDetailsReducer from './birthDetails/birthDetails.reducer';
import kundaliReducer from './kundali/kundali.reducer';
import visibleChartsReducer from './visibleCharts/visibleCharts.reducer';
import kundaliSettingsReducer from './kundaliSettings/kundaliSettings.reducer';

const rootReducer = combineReducers({
    birthDetails: birthDetailsReducer,
    kundali: kundaliReducer,
    visibleCharts: visibleChartsReducer,
    kundaliSettings: kundaliSettingsReducer
})

export default rootReducer;