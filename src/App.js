import React from 'react';
import './App.css';
import KundaliContainer from './components/kundali-container/kundali-container.component';

function App() {
  return (
    <div className="App">

      <div className="toolbar">
      
      </div>

      <div className = "content">
        <KundaliContainer />
        {/* <KundaliInfo /> */}
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

    </div>
  );
}

export default App;
