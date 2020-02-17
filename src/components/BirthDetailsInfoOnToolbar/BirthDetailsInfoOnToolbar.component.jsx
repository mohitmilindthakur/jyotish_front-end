import React from 'react';
import './BirthDetailsInfoOnToolbar.styles.scss';

import {connect} from 'react-redux';

import {selectBirthDetails, selectBirthDateString, selectBirthTimeString} from './../../redux/birthDetails/birthDetails.selectors.js'; 
const BirthDetailsInfoOnToolbar = ({birthDetails: {name, place}, birthDateString, birthTimeString}) => {

  return (
    <p className = 'birth-info-toolbar'>
      {`${name} | ${birthDateString} | ${birthTimeString} | ${place}`}
    </p>
  )
}

const mapStateToProps = state => ({
  birthDetails: selectBirthDetails(state),
  birthDateString: selectBirthDateString(state),
  birthTimeString: selectBirthTimeString(state)
})

export default connect(mapStateToProps)(BirthDetailsInfoOnToolbar);