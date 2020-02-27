import currentUserTypes from './currentUser.types';
import {saveKundali as saveKundaliToFirebase} from './../../firebase/firestore/firestore.js';
import {editCurrentBirthDetails} from './../birthDetails/birthDetails.actions';



export const setCurrentUser = (userAuth) => ({
    type: currentUserTypes.SET_CURRENT_USER,
    payload: userAuth
})

export const setAllUserKundalis = (kundalis) => ({
    type: currentUserTypes.SET_ALL_USER_KUNDALIS,
    payload: kundalis
})

export const editSavedKundali = (kundali) => ({
    type: currentUserTypes.EDIT_SAVED_KUNDALI,
    payload: kundali
})

export const addNewKundaliToAllUserKundalis = (kundali) => ({
    type: currentUserTypes.ADD_NEW_KUNDALI_TO_ALL_USER_KUNDALIS,
    payload: kundali
})

export const saveKundaliToAUser = (userID, birthDetails) => {
    return async (dispatch) => {

        const kundaliRef = await saveKundaliToFirebase(userID, birthDetails);
        const kundaliSnapshot = await kundaliRef.get();
        const kundaliData = kundaliSnapshot.data();

        if (!birthDetails.id){
            dispatch(editCurrentBirthDetails({...kundaliData}));
            dispatch(addNewKundaliToAllUserKundalis({...kundaliData}));
        }
        else {
            dispatch(editSavedKundali({...kundaliData}))
        }
    }
}