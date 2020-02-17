import {birthDetailsTypes} from './birthDetails.types';

let date = new Date();

const INITIAL_STATE = {
    name: 'CURRENT',
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    day: date.getDate(),
    hour: date.getHours(),
    min: date.getMinutes(),
    sec: date.getSeconds(),
    lat: 17,
    lng: 80,
    timezone: 5.5,
    place: 'Hyderabad'
}

const birthDetailsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case birthDetailsTypes.CREATE_NEW_BIRTH_DETAILS:
            return {...action.payload}
    
        default:
            return state;
    }
}

export default birthDetailsReducer;