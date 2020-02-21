import currentUserTypes from './currentUser.types';

const INITIAL_STATE = {
    userAuth: null
}

const currentUserReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case currentUserTypes.SET_CURRENT_USER:
            return {...state, userAuth: action.payload}
    
        default:
            return state
    }
}

export default currentUserReducer;