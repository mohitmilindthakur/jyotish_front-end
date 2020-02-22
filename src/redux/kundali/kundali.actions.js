import kundaliTypes from './kundali.types';
import {getKundali} from './../../utils/axios.routes';



export const setNewKundali = (kundali) => ({
    type: kundaliTypes.SET_NEW_KUNDALI,
    payload: kundali
})

export const fetchKundaliStart = () => ({
    type: kundaliTypes.FETCH_KUNDALI_FROM_SERVER_START
});

export const fetchKundaliSuccess = (kundali) => ({
    type: kundaliTypes.FETCH_KUNDALI_FROM_SERVER_SUCCESS,
    payload: kundali
})

export const fetchKundaliFailure = (errorMessage) => ({
    type: kundaliTypes.FETCH_KUNDALI_FROM_SERVER_FAILURE,
    payload: errorMessage
})

export const fetchKundaliFromServerAsync = (birthDetails, kundaliSettings) => {
    return (dispatch) => {
        dispatch(fetchKundaliStart())
        getKundali(birthDetails, kundaliSettings)
        .then(data => {
            dispatch(fetchKundaliSuccess(data.data))
        })
        .catch(error => {
            dispatch(fetchKundaliFailure(error.message))
        })
    }
}