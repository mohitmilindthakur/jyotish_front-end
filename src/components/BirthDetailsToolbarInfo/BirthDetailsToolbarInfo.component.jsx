import React, {useContext, Fragment} from 'react';
import {Typography} from '@material-ui/core';
import './BirthDetailsToolbarInfo.styles.scss';
import BirthDetailsContext from './../../BirthDetails.context.js';

const formatBirthDetails = (birthDetails) => {
  let {name, gender, year, month, day, hour, min, sec, timezone, lattitude, longitude, place} = birthDetails;

  let date_string = `${day}-${month}-${year}`;
  let time_string = `${hour}:${min}:${sec}`;

  return ({name, gender, date_string, time_string, place})
}

const BirthDetailsToolbarInfo = () => {
  let context = useContext(BirthDetailsContext);
  console.log(context);
  let birthDetails = formatBirthDetails(context.birthDetails);
  return(
    <Fragment>
      <Typography className = "birth-info-toolbar" variant = "subtitle1">{birthDetails.name} | {birthDetails.date_string} | {birthDetails.time_string} | {birthDetails.place || ''}</Typography>
    </Fragment>
  )
}

export default BirthDetailsToolbarInfo;
