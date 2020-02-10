import React, {Fragment} from 'react';
import './BirthDetailsFormModal.styles.scss';
import Backdrop from '@material-ui/core/Backdrop';
import BirthDetailsForm from './../BirthDetailsForm/BirthDetailsForm.component';
import { Modal, Grid } from '@material-ui/core';

const BirthDetailsFormModal = props => {

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }  
  return (
    <Fragment>
    <button onClick = {handleOpen} >{props.children}</button>
      <Modal open = {open} onClose = {handleClose} BackdropComponent={Backdrop}>
          <BirthDetailsForm close = {handleClose} isNewForm = {props.isNewForm} />
      </Modal>
  </Fragment>
  );
}

export default BirthDetailsFormModal;
