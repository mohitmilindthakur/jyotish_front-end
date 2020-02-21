import React, {useState} from 'react';
import './SaveKundaliBtn.styles.scss';
import { Icon } from 'antd';

import {addKundaliForAUser} from './../../firebase/firebase.config.js';

import {connect} from 'react-redux';
import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors';
import {selectBirthDetails} from './../../redux/birthDetails/birthDetails.selectors';


const SaveKundaliBtn = ({birthDetails, currentUser}) => {

  let [loading, setLoading] = useState(false);

  const handleSaveKundali = async () => {
    if (currentUser){
      setLoading(true);
      await addKundaliForAUser(currentUser.id, birthDetails)
      setLoading(false);
    }

    else {
      setLoading(false);
      alert("Please Sign In Before Saving A Kundali")
    }
  }
  
    return (
      loading ? (<Icon type = "loading" className = "header__control-icon" />) : 
      (<Icon type = "save" className = "header__control-icon" title = "Save Kundali" onClick = {handleSaveKundali} />)
    );
}

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state),
  currentUser: selectUserAuth(state)
})

export default connect(mapStateToProps)(SaveKundaliBtn);