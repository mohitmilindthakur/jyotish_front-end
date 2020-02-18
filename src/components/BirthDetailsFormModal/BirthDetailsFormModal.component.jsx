import React, {useState} from 'react';
import './BirthDetailsFormModal.styles.scss';

import {Modal} from 'antd';

import BirthDetailsForm from './../BirthDetailsForm/BirthDetailsForm.component';

const BirthDetailsFormModal = ({render, isOldForm}) => {

  let [isModalVisible, setIsModalVisible] = useState(false);

  const closeModal = () => {
    setIsModalVisible(false)
  }

  const openModal = () => {
    setIsModalVisible(true)
  }

    let IconBtn = render(openModal);
    let isMobileDisplay = window.document.body.clientWidth < 450;
    
    return (
      <React.Fragment>
        <IconBtn />
        <Modal
          title = "Enter Birth Details In The Below Form"
          visible = {isModalVisible}
          onCancel = {closeModal}
          footer = {null}
          className = "birth-details__form-modal"
          bodyStyle = {isMobileDisplay ? {height: "80vh"} : {height: "50vh"} }
          width = {isMobileDisplay ? "100vw" : "50vw"}
          style = {{top: 0}}
          destroyOnClose
        >
          <BirthDetailsForm onFormSubmit = {closeModal} isOldForm = {isOldForm}/>
        </Modal>
      </React.Fragment>
    );
}

export default BirthDetailsFormModal;
