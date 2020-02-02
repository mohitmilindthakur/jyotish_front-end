import React from 'react';
import './BirthDetailsForm.styles.scss';

class BirthDetailsForm extends React.Component {

  constructor() {
    super();

    this.state = {
      name: '',
      gender: 'female',
      place: '',
      date: '',
      isFormValid: false
    }
  }

  getLocationsDetails = () => {
    
  }

  onFormSubmit = (event) => {
    event.preventDefault();
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
