import {createSelector} from 'reselect';

export const selectBirthDetails = state => state.birthDetails;

export const selectBirthDateString = createSelector(
    [selectBirthDetails],
    (birthDetails) => `${birthDetails.day}-${birthDetails.month}-${birthDetails.year}`
)

export const selectBirthTimeString = createSelector (
    [selectBirthDetails],
    (birthDetails) => `${birthDetails.hour}:${birthDetails.min}:${birthDetails.sec}`
)