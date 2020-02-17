import kundaliTypes from './kundali.types';


const INITIAL_STATE = {}

const kundaliReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case  kundaliTypes.SET_NEW_KUNDALI:
            return {...action.payload};
    
        default:
            return state;
    }
}

export default kundaliReducer;