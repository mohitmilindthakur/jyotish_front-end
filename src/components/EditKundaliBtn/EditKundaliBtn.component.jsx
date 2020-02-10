import React from 'react';
import './EditKundaliBtn.styles.scss';
import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';


const EditKundaliBtn = (props) => {
  return (
    <BirthDetailsFormModal isNewForm = {false}><EditOutlinedIcon fontSize = "large"/></BirthDetailsFormModal>
  )
}

export default EditKundaliBtn;
