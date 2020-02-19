import currentUserTypes from './currentUser.types';



export const setCurrentUser = (userAuth) => ({
    type: currentUserTypes.SET_CURRENT_USER,
    payload: userAuth
})