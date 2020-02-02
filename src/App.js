import React from 'react';
import './App.css';
import KundaliContainer from './components/kundali-container/kundali-container.component';
import BirthDetailsForm from './components/BirthDetailsForm/BirthDetailsForm.component';
import Footer from './components/Footer/Footer.component';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      kundali: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:5000/')
    .then(data => data.json())
    .then(data => {
      console.log(data);
      this.setState({kundali: data})
    });
  }

  onKundaliChange = (newKundali) => {
    this.setState({kundali: newKundali})
  }

  render() {
    return (
      <div className="App">

        <div className="toolbar">
        
        </div>

        <div className = "content">
          <KundaliContainer bhavas = {this.state.kundali.bhavas} />
          {/* <KundaliInfo /> */}
          <div style = {{margin: '10px'}}></div>
          <BirthDetailsForm onKundaliChange = {this.onKundaliChange} />
        </div>

        {/* <div className="container">
          <Kundali height = "350" width = "400" />
          <div style = {{margin: '10px'}}></div>
          <Kundali height = "350" width = "400" />
        </div>
        
        <div style = {{margin: '10px'}}></div>

        <div className="container">
          <Kundali height = "350" width = "400" />
          <div style = {{margin: '10px'}}></div>
          <Kundali height = "350" width = "400" />
        </div> */}
      <Footer />
      </div>
    );
  }
}

export default App;
