import kundaliSettingsTypes from './kundaliSettings.types';
import {fetchKundaliFromServerAsync} from './../kundali/kundali.actions';


export const setKundaliSettings = kundaliSettings => ({
    type: kundaliSettingsTypes.SET_KUNDALI_SETTINGS,
    payload: kundaliSettings
})

export const setKundaliSettingsAndUpdateCharts = (kundaliSettings) => {
    return (dispatch, getState) => {
        const birthDetails = getState().currentBirthDetails;
        dispatch(setKundaliSettings(kundaliSettings));
        dispatch(fetchKundaliFromServerAsync(birthDetails, kundaliSettings));
    }
}