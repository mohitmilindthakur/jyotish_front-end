import React from 'react';

import './App.scss';
import 'antd/dist/antd.css';

import {connect} from 'react-redux';

import {selectUserAuth} from './redux/currentUser/currentUser.selectors';

import {setCurrentUser} from './redux/currentUser/currentUser.actions';


import Header from './components/Header/Header.component';
import MainContent from './components/MainContent/MainContent.component';

import {auth} from './firebase/firebase.config';

import {addUserToFirestore} from './firebase/firestore/firestore';

import {Spin} from 'antd';


import {getAllKundalisOfAUser} from './firebase/firestore/firestore.js';
import {selectUserKundalis} from './redux/userKundalis/userKundalis.selectors';
import {setAllUserKundalis} from './redux/userKundalis/userKundalis.actions.js';

class App extends React.Component {
  
  state = {
    isLoading: true
  }

  unsubscribeFromAuth = null;

  componentDidMount () {

    const {setUser} = this.props;

    auth.onAuthStateChanged( async (userAuth) => {
      if (userAuth){
        const userRef = await addUserToFirestore(userAuth);
        userRef.onSnapshot( async (snapshot) => {
          setUser({...snapshot.data(), id: snapshot.id})
          this.setState({isLoading: false})

          if (snapshot.id) {
            // const allKundalis = await getAllKundalisOfAUser(snapshot.id);
            // this.props.setUserKundalis(allKundalis);
          }

        })
      }
      else {
        this.setState({isLoading: false})
        setUser(userAuth)
      }
    })
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
  allKundalis: selectUserKundalis(state)

})

const mapDispatchToProps = (dispatch) => ({
  setUser: (userAuth) => dispatch(setCurrentUser(userAuth)),
  setUserKundalis: (allKundalis) => dispatch(setAllUserKundalis(allKundalis))

})

export default connect(mapStateToProps, mapDispatchToProps)(App);