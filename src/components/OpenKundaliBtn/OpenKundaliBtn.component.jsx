import React from 'react';
import './OpenKundaliBtn.styles.scss';
import { Icon, Modal} from 'antd';

import OpenKundaliModal from './../OpenKundaliModal/OpenKundaliModal.component';


const OpenKundaliBtn = (props) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const closeModal = () => setIsVisible(false);
  const openModal = () => setIsVisible(true);
  
    return (
      <React.Fragment>
        <Icon type = "folder-open" className = "header__control-icon" onClick = {openModal} title = "Open Kundali"/>

        <Modal
          visible = {isVisible}
          onCancel = {closeModal}
          footer = {null}
          title = "Open Kundali"
          destroyOnClose = {true}
        >
          <OpenKundaliModal closeModal = {closeModal} />

        </Modal>
      </React.Fragment>
    );
  }


export default OpenKundaliBtn;
