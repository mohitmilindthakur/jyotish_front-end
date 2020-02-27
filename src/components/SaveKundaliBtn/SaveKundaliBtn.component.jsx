import React, {useState} from 'react';
import './SaveKundaliBtn.styles.scss';
import { Icon } from 'antd';

import {connect} from 'react-redux';

import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors';
import {selectCurrentBirthDetails} from './../../redux/birthDetails/birthDetails.selectors';

import {saveKundaliToAUser} from './../../redux/currentUser/currentUser.actions';

const SaveKundaliBtn = ({birthDetails, currentUser, saveKundaliToAUser}) => {

  let [loading, setLoading] = useState(false);

  const handleSaveKundali = async () => {
    if (currentUser){
      setLoading(true);
      await saveKundaliToAUser(currentUser.id, birthDetails);
      setLoading(false);
    }
  }
  
  return (
    loading ? (<Icon type = "loading" className = "header__control-icon" />) : 
    (<Icon type = "save" className = "header__control-icon" title = "Save Kundali" onClick = {handleSaveKundali} />)
  );
}

const mapStateToProps = (state) => ({
  birthDetails: selectCurrentBirthDetails(state),
  currentUser: selectUserAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  saveKundaliToAUser: (userID, birthDetails) => dispatch(saveKundaliToAUser(userID, birthDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveKundaliBtn);