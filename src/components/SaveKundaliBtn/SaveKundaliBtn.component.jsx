import React, {useState} from 'react';
import './SaveKundaliBtn.styles.scss';
import { Icon } from 'antd';

import {addKundaliForAUser} from './../../firebase/firestore/firestore.js';

import {connect} from 'react-redux';
import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors';
import {selectBirthDetails} from './../../redux/birthDetails/birthDetails.selectors';

import {createNewBirthDetails} from './../../redux/birthDetails/birthDetails.actions.js';



const SaveKundaliBtn = ({birthDetails, currentUser, setBirthDetails}) => {

  let [loading, setLoading] = useState(false);

  const handleSaveKundali = async () => {
    if (currentUser){
      setLoading(true);
      const kundaliRef = await addKundaliForAUser(currentUser.id, birthDetails);
      if (!birthDetails.id){
        const kundaliId = kundaliRef.id
        setBirthDetails({...birthDetails, id: kundaliId});
      }
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

const mapDispatchToProps = (dispatch) => ({
  setBirthDetails: (birthDetails) => dispatch(createNewBirthDetails(birthDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveKundaliBtn);