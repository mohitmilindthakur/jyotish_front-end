import userKundalisTypes from './userKundalis.types';



const INITIAL_STATE = []

const userKundalisReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userKundalisTypes.SET_ALL_USER_KUNDALIS:
            return action.payload

        case userKundalisTypes.UPDATE_SINGLE_USER_KUNDALI:
            const {id} = action.payload;
            const kundaliIndex = state.findIndex(kundali => kundali.id === id);
            return [...state.slice(0, kundaliIndex), action.payload, ...state.slice(kundaliIndex + 1, state.length)];
    
        default:
            return state;
    }
}

export default userKundalisReducer;