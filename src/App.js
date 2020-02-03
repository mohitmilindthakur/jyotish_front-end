import React from 'react';
import './App.css';
import KundaliContainer from './components/kundali-container/kundali-container.component';
import BirthDetailsForm from './components/BirthDetailsForm/BirthDetailsForm.component';
import KundaliInfo from './components/KundaliInfo/KundaliInfo.component';
import Footer from './components/Footer/Footer.component';
import axios from'axios';
import Toolbar from './components/Toolbar/Toolbar.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      kundali: []
    }
  }

  getCurrentTime = () =>{
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let lattitude = 17.3850;
    let longitude = 78.4867;
    let timezone = 5.5;

    return {hour, min, sec, day, month, year, lattitude, longitude, timezone};
  }

  componentDidMount = () => {

    axios.post('http://localhost:5000/charts', this.getCurrentTime())
    .then(data => this.onKundaliChange(data.data));
  }

  onKundaliChange = (newKundali) => {
    this.setState({kundali: newKundali})
  }

  render() {
    return (
      <div className="App">

        <Toolbar onKundaliChange = {this.onKundaliChange} />

        <div className = "content">
          <KundaliContainer charts = {this.state.kundali.charts} />
          <KundaliInfo charts = {this.state.kundali.charts} />
          <div style = {{margin: '10px'}}></div>
        </div>
      <Footer />
      </div>
    );
  }
}

export default App;
