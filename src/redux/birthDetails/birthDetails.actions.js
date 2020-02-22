import {birthDetailsTypes} from './birthDetails.types';

// THIS ACTION IS RESPONSIBLE FOR CREATING A NEW BIRTH DETAILS WHEN SUBMITTED THROUGH A FORM
export const setNewBirthDetails = (birthDetails) => ({
    type: birthDetailsTypes.SET_NEW_BIRTH_DETAILS,
    payload: birthDetails
})