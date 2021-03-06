import React from 'react';
import './UserSettingsModal.styles.scss';


import {Modal} from 'antd';

const UserSettingsModal = (props) => {

  // let CurrentModal = props.render();

  const {CurrentModal} = props;

  const onModalClose = () => props.onModalClose();

  return (
    <div>
      <Modal visible = {Boolean(CurrentModal)} 
        onCancel = {onModalClose}
        footer = {null}
      >
        {Boolean(CurrentModal) && <CurrentModal closeModal = {onModalClose} />}
      </Modal>
    </div>
  )
}

export default UserSettingsModal;
