import React from 'react';
import './BirthDetailsInfoOnToolbar.styles.scss';

import {connect} from 'react-redux';

import {selectCurrentBirthDetails} from './../../redux/birthDetails/birthDetails.selectors.js'; 
const BirthDetailsInfoOnToolbar = ({birthDetails: {name, place, dateString, timeString}}) => {

  return (
    <p className = 'birth-info-toolbar'>
      {`${name} | ${dateString} | ${timeString} | ${place}`}
    </p>
  )
}

const mapStateToProps = state => ({
  birthDetails: selectCurrentBirthDetails(state),
})

export default connect(mapStateToProps)(BirthDetailsInfoOnToolbar);