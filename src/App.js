import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';

import {selectBirthDetails} from './redux/birthDetails/birthDetails.selectors';
import {selectKundaliSettings} from './redux/kundaliSettings/kundaliSettings.selectors';
import {selectUserAuth} from './redux/currentUser/currentUser.selectors';

import {setNewKundali} from './redux/kundali/kundali.actions';
import {setCurrentUser} from './redux/currentUser/currentUser.actions';

import {getKundali as getKundaliFromServer} from './utils/axios.routes';

import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

import {auth} from './firebase/firebase.config';

import {addUserToFirestore} from './firebase/firestore/firestore';

import {Spin} from 'antd';

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  unsubscribeFromAuth = null;

  getKundali = () => {
    const {birthDetails, setKundali, kundaliSettings} = this.props;
    getKundaliFromServer(birthDetails, kundaliSettings)
    .then(data => {
      setKundali(data.data);
    })
    .catch((err) => alert('something went wrong! Please Try Again', err));
  }

  componentDidMount () {
    const {setUser} = this.props;
    this.getKundali();
    auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth){
        const userRef = await addUserToFirestore(userAuth);
        userRef.onSnapshot((snapshot) => {
          setUser({...snapshot.data(), id: snapshot.id})
          this.setState({isLoading: false})
        })
      }
      else {
        this.setState({isLoading: false})
        setUser(userAuth)
      }
    })
  }

  componentDidUpdate (prevProps) {
    if ((prevProps.birthDetails !== this.props.birthDetails) || (prevProps.kundaliSettings !== this.props.kundaliSettings)) {
      this.getKundali();
    }
  }

  render () {

    return(
      this.state.isLoading ?

      <div className = "loader-container"><Spin size = "large" className = "loader"></Spin></div>

      :

      (<div className="App">
          <Header />
          <MainContent />
      </div>)
    )
  }
}

const mapStateToProps = (state) => ({
  birthDetails: selectBirthDetails(state),
  kundaliSettings: selectKundaliSettings(state),
  currentUser: selectUserAuth(state)
})

const mapDispatchToProps = (dispatch) => ({
  setKundali: (kundali) => dispatch(setNewKundali(kundali)),
  setUser: (userAuth) => dispatch(setCurrentUser(userAuth))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);