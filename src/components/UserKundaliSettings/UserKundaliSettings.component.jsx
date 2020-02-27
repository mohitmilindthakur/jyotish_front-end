import React, {useState} from 'react';
import './UserKundaliSettings.styles.scss';

import {connect} from 'react-redux';

import {setKundaliSettingsAndUpdateCharts} from './../../redux/kundaliSettings/kundaliSettings.actions.js';
import {selectKundaliSettings, selectAllAyanamshas} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';

import {ayanamshaToNumberMap} from './../../redux/kundaliSettings/ayanamshaToNumberMap.js';

import {updateKundaliSettingsOfAUser} from './../../firebase/firestore/firestore.js';

import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors.js';

import {Select, Form, Button, Row, Col, Radio, Spin} from 'antd';

const UserKundaliSettings = ({allAyanamshas, kundaliSettings: {ayanamsha, zodiacType, houseType}, getAyanamshaFromNumber, setKundaliSettingsRedux, closeModal, userAuth}) => {

  const [kundaliSettingsState, setKundaliSettingsState] = useState({ayanamsha, zodiacType, houseType});
  const [isLoading, setIsLoading] = React.useState(false);

  const onAyanamshaSelect = (value) => {
    setKundaliSettingsState({...kundaliSettingsState, ayanamsha: value});
  }

  const onZodiacTypeChange = (event) => {
    let value = event.target.value;
    setKundaliSettingsState({...kundaliSettingsState, zodiacType: value});
  }

  const onFormSubmit = async (event) => {
    event.preventDefault();

    if (userAuth){
      setIsLoading(true);
      await updateKundaliSettingsOfAUser(userAuth.id, kundaliSettingsState)
      .then(() => {
      })
      .catch((err) => {
        console.log(err);
      })
    }
    setKundaliSettingsRedux(kundaliSettingsState);
    setIsLoading(false);
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
          <Select defaultValue = {ayanamsha} onSelect = {onAyanamshaSelect} showSearch>
            {
              allAyanamshas.map((ayanamsha, index) => <Select.Option key = {ayanamsha} value = {ayanamshaToNumberMap[ayanamsha]}> {ayanamsha} </Select.Option>)
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
          {isLoading ? <Spin></Spin> : <Button type = "outlined" htmlType = "submit" size = "default"> Modify Changes </Button>}
        </Col>
      </Row>


    </Form>
  );
}

const mapStateToProps = (state) => ({
  kundaliSettings: selectKundaliSettings(state),
  allAyanamshas: selectAllAyanamshas(),
  userAuth: selectUserAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  setKundaliSettingsRedux: (kundaliSettings) => dispatch(setKundaliSettingsAndUpdateCharts(kundaliSettings))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserKundaliSettings);