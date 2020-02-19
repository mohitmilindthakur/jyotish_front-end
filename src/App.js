import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';

import {selectBirthDetails} from './redux/birthDetails/birthDetails.selectors';
import {selectKundaliSettings} from './redux/kundaliSettings/kundaliSettings.selectors';
import {setNewKundali} from './redux/kundali/kundali.actions';

import axios from './config/axios.config';

import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
  }

  getKundali = () => {
    const {birthDetails, setKundali, kundaliSettings} = this.props
    axios.post('/charts', {birthDetails, ...kundaliSettings})
    .then(data => {
      setKundali(data.data);
    })
    .catch((err) => alert('something went wrong! Please Try Again', err));
  }

  componentDidMount () {
    this.getKundali();
  }

  componentDidUpdate () {
    this.getKundali();
    console.log('updated');
  }

  render () {

    return(
      <div className="App">
        <Header />
        <MainContent />
    </div>
    )
  }
}

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state),
  kundaliSettings: selectKundaliSettings(state),
})

const mapDispatchToProps = (dispatch) => ({
  setKundali: (kundali) => dispatch(setNewKundali(kundali))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);