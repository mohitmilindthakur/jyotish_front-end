import kundaliSettingsTypes from './kundaliSettings.types';



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