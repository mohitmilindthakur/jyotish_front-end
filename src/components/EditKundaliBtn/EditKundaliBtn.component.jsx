import React from 'react';
import './EditKundaliBtn.styles.scss';
import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';


const EditKundaliBtn = (props) => {
  return (
    <BirthDetailsFormModal isNewForm = {false}>Edit</BirthDetailsFormModal>
  )
}

export default EditKundaliBtn;
