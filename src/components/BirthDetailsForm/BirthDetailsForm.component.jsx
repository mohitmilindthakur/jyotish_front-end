import React from 'react';
import './BirthDetailsForm.styles.scss';

import {connect} from 'react-redux';

import {selectBirthDetails} from './../../redux/birthDetails/birthDetails.selectors.js';
import {setNewBirthDetailsAndSetKundali} from './../../redux/birthDetails/birthDetails.actions.js';
import {selectKundaliSettings} from './../../redux/kundaliSettings/kundaliSettings.selectors.js';

import {getLocationAxios} from './../../utils/axios.routes.js';

import {Form, Row, Col, Input, Icon, Button, Radio, AutoComplete} from 'antd';

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
      place: '',
      id: null,
      searchedPlaces: [],
      searchedResultsPromise: [],
      searchedResults: null
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState( {[name]: value} )
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    let { searchedPlaces, searchedResultsPromise, searchedResults, ...birthDetails } = this.state;
    this.props.setBirthDetails(birthDetails);

    if (this.props.onFormSubmit) {
      this.props.onFormSubmit();
    }
  }

  handlePlaceChange = (location) => {
    this.setState({place: location})
    this.setState({place: location});
    if (location.length > 3) {
      this.setState((prevState) => ({searchedPlaces: [...prevState.searchedPlaces, location]}), () => this.getLocation(location))
    }
  }

  getLocation = async (location) => {
    this.setState((prevState) => ({searchedResultsPromise: [...prevState.searchedResultsPromise, getLocationAxios(location)]}), () => {
      Promise.all(this.state.searchedResultsPromise)
      .then(data => {
      let allLocations = data.slice(-1)[0].data;
      this.setState({searchedResults: allLocations})
    })
    });
  }

  generateLocationsListForDisplay() {
    return this.state.searchedResults.map((location) => (
      <AutoComplete.Option key = {location.geohash} value = {location.geohash} >
        {location.flag} {location.formatted}
      </AutoComplete.Option>
      )
    )
  }

  onSearchBlur = () => {
    this.setState({searchedPlaces: [], searchedResultsPromise: [], searchedResults: null})
  }

  handleSelectLocation = (selectedLocation) => {
    const searchedLocation = this.state.searchedResults.find(location => location.geohash === selectedLocation);

    const {lat, lng, formatted:place, timezone} = searchedLocation;
    this.setState({lat, lng, place, timezone})
    this.onSearchBlur();
  }

  componentDidMount () {
    if (this.props.isOldForm) {
      this.setState({...this.props.birthDetails})
    }
  }

  render() {

    const options = this.state.searchedResults && this.generateLocationsListForDisplay();

    return (
      <Form onSubmit = {this.onFormSubmit} className = "birth-details__form">

        <Row type = "flex" justify = "space-between" align = "middle">
          <Col span = {15} >
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large" prefix = {<Icon type = "user" />} onChange = {this.handleChange} value = {this.state.name} name = "name" placeholder = "Name" />
            </Form.Item>
          </Col>

          <Col pull = {4} span = {4} >
            <Radio.Group name="gender" value = {this.state.gender} onChange = {this.handleChange} required>
              <Radio value = "female">Female</Radio>
              <Radio value = "male">Male</Radio>
            </Radio.Group>
          </Col>
        </Row>

        <AutoComplete dataSource = {options} value = {this.state.place} onChange = {this.handlePlaceChange} onSelect = {this.handleSelectLocation} placeholder = "Place">
          
        </AutoComplete>

        <Row type = "flex" justify = "space-between" align = "middle">

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large"  onChange = {this.handleChange} value = {this.state.lat} name = "lat" placeholder = "Latitude" />
            </Form.Item>
          </Col>

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large" onChange = {this.handleChange} value = {this.state.lng} name = "lng" placeholder = "Longitude"/>
            </Form.Item>
          </Col>

          <Col span = {7} >
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large" onChange = {this.handleChange} value = {this.state.timezone} name = "timezone" placeholder = "timezone"/>
            </Form.Item>
          </Col>

        </Row>

        <Row type = "flex" justify = "space-between">

          <Col span = {8}>
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large" type = "date" prefix = {<Icon type = "calendar"/>} onChange = {this.handleChange} name = "dateString" value = {this.state.dateString} />
            </Form.Item>
          </Col>

          <Col span = {8} pull = {5}>
            <Form.Item className = "birth-details__form-item">
              <Input required size = "large" type = "time" prefix = {<Icon type = "clock-circle"/>} onChange = {this.handleChange} name = "timeString" value = {this.state.timeString} step = "1"/>
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

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state),
  kundaliSettings: selectKundaliSettings(state)
})

const mapDispatchToProps = (dispatch) => ({
  setBirthDetails: (birthDetails) => dispatch(setNewBirthDetailsAndSetKundali(birthDetails))
})

export default connect(mapStateToProps, mapDispatchToProps)(BirthDetailsForm);