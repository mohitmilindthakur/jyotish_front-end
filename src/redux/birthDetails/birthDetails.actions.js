import {birthDetailsTypes} from './birthDetails.types';

// THIS ACTION IS RESPONSIBLE FOR CREATING A NEW BIRTH DETAILS WHEN SUBMITTED THROUGH A FORM
export const createNewBirthDetails = (birthDetails) => ({
    type: birthDetailsTypes.CREATE_NEW_BIRTH_DETAILS,
    payload: birthDetails
})