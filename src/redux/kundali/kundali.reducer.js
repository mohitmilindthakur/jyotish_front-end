import kundaliTypes from './kundali.types';


const INITIAL_STATE = {
    kundali: {},
    isFetching: false,
    errorMessage: ''
}

const kundaliReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
         case kundaliTypes.FETCH_KUNDALI_FROM_SERVER_START:
            return {...state, isFetching: true}

        case kundaliTypes.FETCH_KUNDALI_FROM_SERVER_SUCCESS:
            return {...state, isFetching: false, kundali: action.payload}

        case kundaliTypes.FETCH_KUNDALI_FROM_SERVER_FAILURE:
            return {...state, isFetching: false, errorMessage: action.payload}
    
        default:
            return state;
    }
}

export default kundaliReducer;