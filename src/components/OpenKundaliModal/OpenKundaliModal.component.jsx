import React from 'react';
import './OpenKundaliModal.styles.scss';

import { Menu, Row, Col, Button } from 'antd';

import {connect} from 'react-redux';

import {selectUserKundalis} from './../../redux/userKundalis/userKundalis.selectors.js';

import {setNewBirthDetailsAndSetKundali} from './../../redux/birthDetails/birthDetails.actions.js';

const OpenKundaliModal = ({allKundalis, setBirthDetails, closeModal}) => {

  let [selectedKundali, setSelectedKundali] = React.useState(null);

  const onSelectingBirthDetails = () => {
    setBirthDetails(selectedKundali);
    closeModal();
  }

  const handleDoubleClick = (kundali) => {
    setSelectedKundali(kundali);
    onSelectingBirthDetails();
  }

  return (
    <div>
    <Row type = "flex">

      <Col span = {12}>
        <Menu>
          {
            allKundalis.map(kundali => (<Menu.Item key = {kundali.id} onClick = {() => setSelectedKundali(kundali)} onDoubleClick = {() => handleDoubleClick(kundali)} >{kundali.name}</Menu.Item>))
          }
        </Menu>
      </Col>

      <Col span = {12} >
        <Menu>
          {
            selectedKundali && Object.keys(selectedKundali).map((key, index) => (<Menu.Item key = {index}>{key}: {selectedKundali[key]}</Menu.Item>))
          }
        </Menu>
      </Col>

      </Row>

      <Button onClick = {onSelectingBirthDetails} >Open Kundali</Button>

    </div>
  );
}

const mapStateToProps = (state) => ({
  allKundalis: selectUserKundalis(state)
});

const mapDispatchToProps = (dispatch) => ({
  setBirthDetails: (birthDetails) => dispatch(setNewBirthDetailsAndSetKundali(birthDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenKundaliModal);