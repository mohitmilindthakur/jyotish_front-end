import React from 'react';
import './UserKundaliSettings.styles.scss';

import {connect} from 'react-redux';

import {selectKundaliSettings} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';
import {selectAllAyanamshas} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';

import {Select, Form, Button, Row, Col} from 'antd';

const UserKundaliSettings = ({allAyanamshas, kundaliSettings: {ayanamsha, zodiacType, houseType}}) => {

  const handleChange = (value) => {
    console.log(value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <Form onSubmit = {onFormSubmit} >
      <h3 className = "text-center" >Kundali Settings</h3>
      <hr className = "hr-light"/>
      <Row className = "margin-u-2" type = "flex" align = "middle">
        <Col span = {7}>
          <span>Select Ayanamsha</span>
        </Col>
        <Col span = {12}>
          <Select defaultValue = {ayanamsha} onChange = {handleChange}>
            {
              allAyanamshas.map((ayanamsha, index) => <Select.Option key = {index} value = {index}> {ayanamsha} </Select.Option>)
            }
          </Select>
        </Col>
      </Row>
      <Row className = "margin-u-2">
        <Col align = "middle" justify = "center">
          <Button type = "outlined" htmlType = "submit" size = "default"> Modify Changes </Button>
        </Col>
      </Row>
    </Form>
  );
}

const mapStateToProps = (state) => ({
  kundaliSettings: selectKundaliSettings(state),
  allAyanamshas: selectAllAyanamshas()
})

export default connect(mapStateToProps)(UserKundaliSettings);