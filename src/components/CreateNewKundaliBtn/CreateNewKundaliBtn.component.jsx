import React from 'react';
import './CreateNewKundaliBtn.styles.scss';
import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';



const CreateNewKundaliBtn = (props) => {

  return (
    <BirthDetailsFormModal isNewForm = {true}><AddOutlinedIcon fontSize = "large" /></BirthDetailsFormModal>
  )
}

export default CreateNewKundaliBtn;
