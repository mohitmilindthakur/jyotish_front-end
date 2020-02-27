import {birthDetailsTypes} from './birthDetails.types';
import {fetchKundaliFromServerAsync} from './../kundali/kundali.actions';

// THIS ACTION IS RESPONSIBLE FOR CREATING A NEW BIRTH DETAILS WHEN SUBMITTED THROUGH A FORM
export const editCurrentBirthDetails = (birthDetails) => ({
    type: birthDetailsTypes.EDIT_CURRENT_BIRTH_DETAILS,
    payload: birthDetails
})

export const editCurrentBirthDetailsAndSetKundali = (birthDetails, kundaliSettings) => {
    return (dispatch) => {
        dispatch(editCurrentBirthDetails(birthDetails));
        dispatch(fetchKundaliFromServerAsync(birthDetails, kundaliSettings));
    }
}