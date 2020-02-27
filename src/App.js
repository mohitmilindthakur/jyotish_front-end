import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';
import {auth} from './firebase/firebase.config';

import {addUserToFirestore} from './firebase/firestore/firestore';
import {getAllKundalisOfAUser} from './firebase/firestore/firestore.js';

import {setCurrentUser, setAllUserKundalis} from './redux/currentUser/currentUser.actions';
import {setKundaliSettingsAndUpdateCharts} from './redux/kundaliSettings/kundaliSettings.actions';

import {Spin} from 'antd';
import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  unsubscribeFromAuth = null;

  componentDidMount () {

    const {setCurrentUser, setAllUserKundalis, setKundaliSettingsAndUpdateCharts} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async (userAuth) => {

      let userRef, userSnapshot

      if (userAuth){
        try {
          userRef = await addUserToFirestore(userAuth);
          userSnapshot = await userRef.get();
          
        } catch (error) {
          alert(error.message)
        }

        if (userSnapshot.exists) {

          const userData = userSnapshot.data();

          if (userData) {

            const {kundaliSettings, kundalis, ...userAuthData} = userData;
            setCurrentUser({...userAuthData, id: userSnapshot.id});

            let allUserKundalis = [];

            if (kundalis.length > 0) {
              try {
                allUserKundalis = await getAllKundalisOfAUser(userSnapshot.id)
              } catch (error) {
                alert('Could Not Get Your Saved Kundalis, Try Again!\n' + error.message)
              }
            }
            setAllUserKundalis(allUserKundalis);

          }
          setKundaliSettingsAndUpdateCharts(userSnapshot.data().kundaliSettings);
          this.setState({isLoading: false});
        }
      }
      else {
        this.setState({isLoading: false})
        setCurrentUser(userAuth)
        setAllUserKundalis([]);
      }
    })
  }

  componentWillUnmount () {
    this.unsubscribeFromAuth && this.unsubscribeFromAuth();
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

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userAuth) => dispatch(setCurrentUser(userAuth)),
  setAllUserKundalis: (allKundalis) => dispatch(setAllUserKundalis(allKundalis)),
  setKundaliSettingsAndUpdateCharts: (kundaliSettings) => dispatch(setKundaliSettingsAndUpdateCharts(kundaliSettings))

})

export default connect(null, mapDispatchToProps)(App);