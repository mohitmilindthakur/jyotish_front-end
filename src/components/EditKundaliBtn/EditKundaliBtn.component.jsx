import React from 'react';
import './EditKundaliBtn.styles.scss';
import { Icon } from 'antd';

import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';


const EditKundaliBtn = (props) => {

  return (
    <BirthDetailsFormModal isOldForm render = {(onClickHandler) => () => (<Icon className = "header__control-icon" onClick = {onClickHandler} type = "edit" title = "Edit Kundali"/>)} />
  )
};

export default EditKundaliBtn;