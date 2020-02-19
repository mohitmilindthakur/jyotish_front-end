import React, {useState} from 'react';
import './UserKundaliSettings.styles.scss';

import {connect} from 'react-redux';

import {setKundaliSettings} from './../../redux/kundaliSettings/kundaliSettings.actions.js';
import {selectKundaliSettings, selectAllAyanamshas, selectAyanamshaFromNumber} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';

import {Select, Form, Button, Row, Col, Radio} from 'antd';

const UserKundaliSettings = ({allAyanamshas, kundaliSettings: {ayanamsha, zodiacType, houseType}, getAyanamshaFromNumber, setKundaliSettingsRedux, closeModal}) => {

  const [kundaliSettingsState, setKundaliSettingsState] = useState({ayanamsha, zodiacType, houseType});

  const onAyanamshaSelect = (value) => {
    setKundaliSettingsState({...kundaliSettingsState, ayanamsha: value});
  }

  const onZodiacTypeChange = (event) => {
    let value = event.target.value;
    setKundaliSettingsState({...kundaliSettingsState, zodiacType: value});
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    setKundaliSettingsRedux(kundaliSettingsState);
    closeModal();
  }

  return (
    <Form onSubmit = {onFormSubmit} className = "kundali-settings__form">

      <h3 className = "text-center" >Kundali Settings</h3>
      <hr className = "hr-light"/>


      <Row className = "margin-u-2" type = "flex" align = "middle">

        <Col span = {7}>
          <span>Select Ayanamsha</span>
        </Col>

        <Col span = {12}>
          <Select defaultValue = {getAyanamshaFromNumber(ayanamsha)} onSelect = {onAyanamshaSelect} showSearch>
            {
              allAyanamshas.map((ayanamsha, index) => <Select.Option key = {index} value = {ayanamsha}> {ayanamsha} </Select.Option>)
            }
          </Select>
        </Col>

      </Row>

      <Row type = "flex" className = "margin-u-2" align = "middle">

        <Col span = {7}>
          <span>Select Zodiac Type</span>
        </Col>

        <Col span = {12} className = "text-center">

          <Radio.Group value = {kundaliSettingsState.zodiacType} onChange = {onZodiacTypeChange}>
            <Radio value = "T">Tropical</Radio>
            <Radio value = "S">Sidereal</Radio>
          </Radio.Group>

        </Col>

      </Row>


      <Row className = "margin-u-5">
        <Col align = "middle" justify = "center">
          <Button type = "outlined" htmlType = "submit" size = "default"> Modify Changes </Button>
        </Col>
      </Row>


    </Form>
  );
}

const mapStateToProps = (state) => ({
  kundaliSettings: selectKundaliSettings(state),
  allAyanamshas: selectAllAyanamshas(),
  getAyanamshaFromNumber: (ayanamshaNumber) => selectAyanamshaFromNumber(ayanamshaNumber)
})

const mapDispatchToProps = (dispatch) => ({
  setKundaliSettingsRedux: (kundaliSettings) => dispatch(setKundaliSettings(kundaliSettings))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserKundaliSettings);