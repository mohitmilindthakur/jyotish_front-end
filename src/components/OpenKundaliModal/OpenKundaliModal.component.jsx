import React from 'react';
import './OpenKundaliModal.styles.scss';

import { Menu, Row, Col, Button } from 'antd';

import {connect} from 'react-redux';

import {selectUserKundalis} from './../../redux/userKundalis/userKundalis.selectors.js';

import {createNewBirthDetails} from './../../redux/birthDetails/birthDetails.actions.js';

const OpenKundaliModal = ({allKundalis, setBirthDetails, closeModal}) => {

  let [selectedKundali, setSelectedKundali] = React.useState(null);

  const onSelectingBirthDetails = () => {
    setBirthDetails(selectedKundali);
    closeModal();
  }

  return (
    <div>
    <Row type = "flex">

      <Col span = {12}>
        <Menu>
          {
            allKundalis.map(kundali => (<Menu.Item key = {kundali.id} onClick = {() => setSelectedKundali(kundali)} >{kundali.name}</Menu.Item>))
          }
        </Menu>
      </Col>

      <Col span = {12} >
        <Menu>
          {
            selectedKundali && Object.keys(selectedKundali).map((key, index) => (<Menu.Item key = {index}>{selectedKundali[key]}</Menu.Item>))
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
  setBirthDetails: (birthDetails) => dispatch(createNewBirthDetails(birthDetails))
});

export default connect(mapStateToProps, mapDispatchToProps)(OpenKundaliModal);