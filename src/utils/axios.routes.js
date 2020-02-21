import axios from './../config/axios.config';

export const getKundali = (birthDetails, kundaliSettings) => {
    return axios.post('/charts', {birthDetails, ...kundaliSettings})
  }