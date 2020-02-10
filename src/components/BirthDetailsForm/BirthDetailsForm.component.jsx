import React from 'react';
import './BirthDetailsForm.styles.scss';
import axios from 'axios';
import { FormGroup, Grid } from '@material-ui/core';
import {TextField, Radio, RadioGroup, FormControlLabel, Button} from '@material-ui/core';
import BirthDetailsContext from './../../BirthDetails.context.js';
import SearchLocation from './../SearchLocation/SearchLocation.component';


class BirthDetailsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      place: '',
      year: '',
      month: '',
      day: '',
      hour: '',
      min: '',
      sec: '',
      lattitude: '17.38',
      longitude: '78.48',
      timezone: '5.5'
    }
  }

  static contextType = BirthDetailsContext;

  onFormSubmit = (event) => {
    event.preventDefault();
    this.context.updateBirthDetails(this.state);
    if (this.props.close) this.props.close();
  };

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  setLocation = (place, coords) => {
    this.setState({place: place});
    this.setState({lattitude: coords.lat});
    this.setState({longitude: coords.lng});
  }

  componentDidMount() {
    if (!this.props.isNewForm) {
      this.setState(this.context.birthDetails);
    }
  }

  render() {
    console.log('rendered');
    return (
      <form action="#" onSubmit = {this.onFormSubmit} className = "kundali-form">

        <TextField label="Name" variant="outlined" name = "name" onChange = {this.handleChange} value = {this.state.name} required autoFocus className = "kundali-form__name" size = "medium" />

        <RadioGroup aria-label="position" name="gender" value = {this.state.gender} onChange={this.handleChange} row>
          <FormControlLabel
            value="male"
            control={<Radio color="primary" />}
            label="male"
            labelPlacement="start"
          />
          <FormControlLabel
            value="female"
            control={<Radio color="primary" />}
            label="female"
            labelPlacement="start"
          />
          </RadioGroup>

        <SearchLocation place = {this.state.place} setLocation = {this.setLocation} handleChange = {this.handleChange} />


        <Grid container direction = "column" className = "kundali-form__coords-time">

          <Grid container item justify = "space-around">

            <TextField name="lattitude" label="lattitude" variant="outlined" onChange = {this.handleChange} value = {this.state.lattitude} required />

            <TextField name="longitude" label="longitude" variant="outlined" onChange = {this.handleChange} value = {this.state.longitude} required />

            <TextField name="timezone" label="timezone" variant="outlined" onChange = {this.handleChange} value = {this.state.timezone} required />

          </Grid>

          <Grid container item justify = "space-around">

            <TextField name="day" label="day" variant="outlined" onChange = {this.handleChange} value = {this.state.day} required />

            <TextField name="month" label="month" variant="outlined" onChange = {this.handleChange} value = {this.state.month} required />

            <TextField name="year" label="year" variant="outlined" onChange = {this.handleChange} value = {this.state.year} required />

          </Grid>

          <Grid container item justify = "space-around">

            <TextField name="hour" label="hour" variant="outlined" onChange = {this.handleChange} value = {this.state.hour} required />

            <TextField name="min" label="min" variant="outlined" onChange = {this.handleChange} value = {this.state.min} required />

            <TextField name="sec" label="sec" variant="outlined" onChange = {this.handleChange} value = {this.state.sec} required />

          </Grid>

        </Grid>

        <button type="submit">Get Kundali</button>
      </form>

    );
  }
}

export default BirthDetailsForm;
