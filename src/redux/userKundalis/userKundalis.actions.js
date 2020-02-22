import userKundalisTypes from './userKundalis.types';

export const setAllUserKundalis = (kundalis) => ({
    type: userKundalisTypes.SET_ALL_USER_KUNDALIS,
    payload: kundalis
})