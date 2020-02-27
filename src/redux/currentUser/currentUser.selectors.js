import {createSelector} from 'reselect';

export const selectCurrentUser = (state) => state.currentUser;

export const selectUserAuth = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser.userAuth
)

export const selectAllUserKundalis = createSelector(
    [selectCurrentUser],
    (currentUser) => currentUser.allKundalis
)