import {birthDetailsTypes} from './birthDetails.types';

let date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;

day = day < 10 ? `0${day}` : day;
month = month < 10 ? `0${month}` : month;

const INITIAL_STATE = {
    name: 'CURRENT',
    dateString: `${date.getFullYear()}-${month}-${day}`,
    timeString: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
    lat: 17,
    lng: 80,
    timezone: 5.5,
    place: 'Hyderabad',
    gender: 'female'
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