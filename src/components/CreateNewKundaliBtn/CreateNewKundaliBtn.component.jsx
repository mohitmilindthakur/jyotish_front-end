import React from 'react';
import './CreateNewKundaliBtn.styles.scss';
import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';


const CreateNewKundaliBtn = (props) => {

  return (
    <BirthDetailsFormModal isNewForm = {true}>New</BirthDetailsFormModal>
  )
}

export default CreateNewKundaliBtn;
