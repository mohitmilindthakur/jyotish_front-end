import React, {useState} from 'react';
import './SaveKundaliBtn.styles.scss';
import { Icon } from 'antd';

import {saveKundali as saveKundaliToFirebase} from './../../firebase/firestore/firestore.js';

import {connect} from 'react-redux';
import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors';
import {selectBirthDetails} from './../../redux/birthDetails/birthDetails.selectors';

import {setNewBirthDetails} from './../../redux/birthDetails/birthDetails.actions.js';

import {updateSingleUserKundali} from './../../redux/userKundalis/userKundalis.actions.js';



const SaveKundaliBtn = ({birthDetails, currentUser, setBirthDetails, updateSingleUserKundali}) => {

  let [loading, setLoading] = useState(false);

  const handleSaveKundali = async () => {
    if (currentUser){
      setLoading(true);
      const kundaliRef = await saveKundaliToFirebase(currentUser.id, birthDetails);
      if (!birthDetails.id){
        const kundaliId = kundaliRef.id
        setBirthDetails({...birthDetails, id: kundaliId});
      }
      else {
        const kundaliSnapshot = await kundaliRef.get();
        updateSingleUserKundali(kundaliSnapshot.data());
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
  setBirthDetails: (birthDetails) => dispatch(setNewBirthDetails(birthDetails)),
  updateSingleUserKundali: (birthDetails) => dispatch(updateSingleUserKundali(birthDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(SaveKundaliBtn);