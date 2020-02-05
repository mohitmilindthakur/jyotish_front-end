import React from 'react';
import './CreateNewKundaliBtn.styles.scss';
import { Modal, Grid } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import BirthDetailsForm from './../BirthDetailsForm/BirthDetailsForm.component';


const CreateNewKundaliBtn = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <button onClick = {handleOpen} >New Kundali</button>
        <Modal open = {open} onClose = {handleClose} BackdropComponent={Backdrop}>
            <BirthDetailsForm close = {handleClose} onKundaliChange = {props.onKundaliChange} />
        </Modal>
    </div>
  )
}

export default CreateNewKundaliBtn;
