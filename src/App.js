import React from 'react';
import './App.css';
import Kundali from './components/Kundali/Kundali.component';

function App() {
  return (
    <div className="App">

      <div className="toolbar">
      
      </div>

      <div className="container">
        <Kundali height = "400" width = "400" />
        <div style = {{margin: '10px'}}></div>
        <Kundali height = "400" width = "400" />
      </div>
      
      <div style = {{margin: '10px'}}></div>

      <div className="container">
        <Kundali height = "400" width = "400" />
        <div style = {{margin: '10px'}}></div>
        <Kundali height = "400" width = "400" />
      </div>

    </div>
  );
}

export default App;
