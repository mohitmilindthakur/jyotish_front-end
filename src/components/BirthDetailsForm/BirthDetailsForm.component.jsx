import React from 'react';
import './BirthDetailsForm.styles.scss';
import axios from 'axios';

class BirthDetailsForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: 'female',
      place: '',
      date: '',
      time: ''
    }
  }

  getLocationsDetails = () => {
    
  }

  formatDateAndTime = () => {
    let date = this.state.date;
    let date_split = date.split('-');

    let year = Number(date_split[0]);
    let month = Number(date_split[1]);
    let day = Number(date_split[2]);

    let time = this.state.time;
    let time_split = time.split(':');

    let hour = Number(time_split[0]);
    let min = Number(time_split[1]);
    let sec = Number(time_split[2]);

    return {year, month, day, hour, min, sec};
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    let birthDetails = this.formatDateAndTime();
    birthDetails.timezone = 5.5;
    birthDetails.longitude = 78.48;
    birthDetails.lattitude = 17.38;

    axios.post('http://localhost:5000', birthDetails)
    .then(data => this.props.onKundaliChange(data.data));

  };

  handleChange = (event) => {
    let {name, value} = event.target;
    console.log(`name --> ${name}, value --> ${value}`);
    this.setState({[name]: value});
  }

  render() {
    return (
      <form action="#" onSubmit = {this.onFormSubmit} >
        <input name = "name" onChange = {this.handleChange} value = {this.state.name} required />

        <input type="radio" name="gender" value = "male" onChange = {this.handleChange} checked = {this.state.gender === "male"} required/>
        <label>Male</label>
        <input type="radio" name="gender" value = "female" onChange = {this.handleChange} checked = {this.state.gender === "female"} required />
        <label>Female</label>

        <input type="search" name="place" onChange = {this.handleChange} value = {this.state.place} required />

        <input type="date" name="date" onChange = {this.handleChange} required />

        <input type="time" name="time" step = "1" onChange = {this.handleChange} required />
        <label>Time in 12 Hour Format</label>

        <button type="submit">Get Kundali</button>
      </form>
    );
  }
}

export default BirthDetailsForm;
