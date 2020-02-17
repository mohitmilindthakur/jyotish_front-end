import React, {useEffect} from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';

import {selectBirthDetails} from './redux/birthDetails/birthDetails.selectors';
import {setNewKundali} from './redux/kundali/kundali.actions';

import axios from './config/axios.config';

import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

const App = ({birthDetails, setKundali}) => {

  useEffect(() => {
    axios.post('/charts', birthDetails)
    .then(data => {
      setKundali(data.data);
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

const mapDispatchToProps = (dispatch) => ({
  setKundali: (kundali) => dispatch(setNewKundali(kundali))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);