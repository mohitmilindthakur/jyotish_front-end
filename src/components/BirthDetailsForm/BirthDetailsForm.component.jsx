import React from 'react';
import './BirthDetailsForm.styles.scss';

import {Form, Row, Col, Input, Icon, Button, Radio} from 'antd';

class BirthDetailsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      gender: 'female',
      dateString: '',
      timeString: '',
      lat: '',
      lng: '',
      timezone: '',
      place: ''
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState( {[name]: value} )
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {

    return (
      <Form onSubmit = {this.onFormSubmit} className = "birth-details__form">

        <Row type = "flex" justify = "space-between" align = "middle">
          <Col span = {15} >
            <Form.Item className = "birth-details__form-item">
              <Input prefix = {<Icon type = "user" />} onChange = {this.handleChange} value = {this.state.name} name = "name" placeholder = "Name" />
            </Form.Item>
          </Col>

          <Col pull = {4} span = {4} >
            <Radio.Group name="gender" value = {this.state.gender} onChange = {this.handleChange} >
              <Radio value = "female">Female</Radio>
              <Radio value = "male">Male</Radio>
            </Radio.Group>
          </Col>
        </Row>

        <Form.Item className = "birth-details__form-item">
          <Input.Search prefix = {<Icon type = "compass" />} onChange = {this.handleChange} value = {this.state.place} name = "place" placeholder = "Place" />
        </Form.Item>

        <Row type = "flex" justify = "space-between" align = "middle">

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input pattern = "[0-9]+([\.][0-9]+)?" onChange = {this.handleChange} value = {this.state.lat} name = "lat" placeholder = "Latitude" />
            </Form.Item>
          </Col>

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input pattern = "[0-9]+([\.][0-9]+)?" onChange = {this.handleChange} value = {this.state.lng} name = "lng" placeholder = "Longitude"/>
            </Form.Item>
          </Col>

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input pattern = "[0-9]+([\.][0-9]+)?" onChange = {this.handleChange} value = {this.state.timezone} name = "timezone" placeholder = "timezone"/>
            </Form.Item>
          </Col>

        </Row>

        <Row type = "flex" justify = "space-between">

          <Col span = {8}>
            <Form.Item className = "birth-details__form-item">
              <Input type = "date" prefix = {<Icon type = "calendar"/>} onChange = {this.handleChange} name = "dateString" value = {this.state.dateString} />
            </Form.Item>
          </Col>

          <Col span = {8} pull = {5}>
            <Form.Item className = "birth-details__form-item">
              <Input type = "time" prefix = {<Icon type = "clock-circle"/>} onChange = {this.handleChange} name = "timeString" value = {this.state.timeString} step = "1"/>
            </Form.Item>
          </Col>

        </Row>

        <Row type = "flex" justify = "center" align = "middle">
          <Col>
            <Button type = "primary" htmlType = "submit"> Get Kundali </Button>
          </Col>
        </Row>

      </Form>
    );
  }
}

export default BirthDetailsForm;
