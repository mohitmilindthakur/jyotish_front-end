import React from 'react';
import './NewKundaliBtn.styles.scss';
import { Icon } from 'antd';

import BirthDetailsFormModal from './../BirthDetailsFormModal/BirthDetailsFormModal.component';

const NewKundaliBtn = (props) => {

    return (
      <BirthDetailsFormModal render = {(onClickHandler) => () => (<Icon className = "header__control-icon" onClick = {onClickHandler} type = "file-add" title = "New Kundali"/>)} />
    );
  }


export default NewKundaliBtn;
