import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

export default App;