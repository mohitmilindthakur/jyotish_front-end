import kundaliTypes from './kundali.types';



export const setNewKundali = (kundali) => ({
    type: kundaliTypes.SET_NEW_KUNDALI,
    payload: kundali
})