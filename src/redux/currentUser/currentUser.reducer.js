import currentUserTypes from './currentUser.types';
import {editSavedKundali} from './currentUser.utils';

const INITIAL_STATE = {
    userAuth: null,
    allKundalis: []
}

const currentUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case currentUserTypes.SET_CURRENT_USER:
            return {...state, userAuth: action.payload}

        case currentUserTypes.SET_ALL_USER_KUNDALIS:
            return {...state, allKundalis: action.payload}

        case currentUserTypes.EDIT_SAVED_KUNDALI:
            let allKundalis = editSavedKundali(state.allKundalis, action.payload)
            return {...state, allKundalis}

        case currentUserTypes.ADD_NEW_KUNDALI_TO_ALL_USER_KUNDALIS:
            return {...state, allKundalis: [...state.allKundalis, action.payload]}
            
        default:
            return state
    }
}

export default currentUserReducer;