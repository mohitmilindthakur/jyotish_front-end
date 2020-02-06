import React from 'react';
import './App.styles.scss';
import KundaliContainer from './components/kundali-container/kundali-container.component';
import BirthDetailsForm from './components/BirthDetailsForm/BirthDetailsForm.component';
import KundaliInfo from './components/KundaliInfo/KundaliInfo.component';
import Footer from './components/Footer/Footer.component';
import axios from'axios';
import Toolbar from './components/Toolbar/Toolbar.component';
import MainContent from './components/MainContent/MainContent.component';
import {ChartDetailsProvider} from './CurrentChart.context.js';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      birthDetails: {},
      chartDetails: []
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

    let birthDetails = this.getCurrentTime();

    this.setState({birthDetails: birthDetails}, () => {
      axios.post('http://localhost:5000/charts', this.state.birthDetails)
      .then(data => this.onKundaliChange(data.data));
    })
  }

  onKundaliChange = (newKundali) => {
    this.setState({chartDetails: newKundali})
  }

  render() {
    return (
      <div className="App">
        <ChartDetailsProvider value = {this.state.chartDetails} >
          <Toolbar onKundaliChange = {this.onKundaliChange} />
          {this.state.chartDetails.charts && <MainContent />}
          <Footer />
        </ChartDetailsProvider>
      </div>
    );
  }
}

export default App;
