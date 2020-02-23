import {birthDetailsTypes} from './birthDetails.types';
import {fetchKundaliFromServerAsync} from './../kundali/kundali.actions';

// THIS ACTION IS RESPONSIBLE FOR CREATING A NEW BIRTH DETAILS WHEN SUBMITTED THROUGH A FORM
export const setNewBirthDetails = (birthDetails) => ({
    type: birthDetailsTypes.SET_NEW_BIRTH_DETAILS,
    payload: birthDetails
})

export const setNewBirthDetailsAndSetKundali = (birthDetails, kundaliSettings) => {
    return (dispatch) => {
        dispatch(setNewBirthDetails(birthDetails));
        dispatch(fetchKundaliFromServerAsync(birthDetails, kundaliSettings));
    }
}