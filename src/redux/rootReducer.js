import {combineReducers} from 'redux';

import birthDetailsReducer from './birthDetails/birthDetails.reducer';
import kundaliReducer from './kundali/kundali.reducer';
import visibleChartsReducer from './visibleCharts/visibleCharts.reducer';
import kundaliSettingsReducer from './kundaliSettings/kundaliSettings.reducer';
import currentUserReducer from './currentUser/currentUser.reducer';

const rootReducer = combineReducers({
    currentBirthDetails: birthDetailsReducer,
    currentKundali: kundaliReducer,
    visibleCharts: visibleChartsReducer,
    kundaliSettings: kundaliSettingsReducer,
    currentUser: currentUserReducer,
})

export default rootReducer;