import React, {useEffect} from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';

import {selectBirthDetails} from './redux/birthDetails/birthDetails.selectors';

import axios from './config/axios.config';

import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

const App = ({birthDetails}) => {

  useEffect(() => {
    axios.post('/charts', birthDetails)
    .then(data => {
      console.log(data);
    });
  })

  return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
  );
}

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state)
})

export default connect(mapStateToProps)(App);