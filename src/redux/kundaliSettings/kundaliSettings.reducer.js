import kundaliSettingsTypes from './kundaliSettings.types';
import ayanamshaToNumberMap from './ayanamshaToNumberMap';

const INITIAL_STATE = {
    ayanamsha: 5,
    zodiacType: 'S',
    houseType: 'E'
}

const kundaliSettingsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case kundaliSettingsTypes.SET_AYANMASHA:
            return {...state, ayanamsha: ayanamshaToNumberMap[action.payload]};

        case kundaliSettingsTypes.SET_ZODIAC_TYPE:
            return {...state, zodiacType: action.payload};

        case kundaliSettingsTypes.SET_HOUSE_TYPE:
            return {...state, houseType: action.payload};

        case kundaliSettingsTypes.SET_KUNDALI_SETTINGS:
            return {...state, ...action.payload}

        default:
            return state;
    }
}

export default kundaliSettingsReducer;