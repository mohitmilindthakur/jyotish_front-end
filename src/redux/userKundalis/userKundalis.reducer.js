import userKundalisTypes from './userKundalis.types';



const INITIAL_STATE = []

const userKundalisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userKundalisTypes.SET_ALL_USER_KUNDALIS:
            return action.payload
    
        default:
            return state;
    }
}

export default userKundalisReducer;