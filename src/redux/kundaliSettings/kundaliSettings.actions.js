import kundaliSettingsTypes from './kundaliSettings.types';
import {fetchKundaliFromServerAsync} from './../kundali/kundali.actions';



export const setAyanmasha = ayanamsha => ({
    type: kundaliSettingsTypes.SET_AYANAMSHA,
    payload: ayanamsha
})

export const setZodiacType = zodiacType => ({
    type: kundaliSettingsTypes.SET_ZODIA_TYPE,
    payload: zodiacType
})

export const setHouseType = houseType => ({
    type: kundaliSettingsTypes.SET_HOUSE_TYPE,
    payload: houseType
})

export const setKundaliSettings = kundaliSettings => ({
    type: kundaliSettingsTypes.SET_KUNDALI_SETTINGS,
    payload: kundaliSettings
})

export const setKundaliSettingsAndUpdateCharts = (kundaliSettings) => {
    return (dispatch, getState) => {
        const birthDetails = getState().birthDetails;
        dispatch(setKundaliSettings(kundaliSettings));
        dispatch(fetchKundaliFromServerAsync(birthDetails, kundaliSettings));
    }
}