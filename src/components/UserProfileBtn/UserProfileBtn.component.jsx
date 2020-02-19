import React, {useState} from 'react';
import './UserProfileBtn.styles.scss';
import { Icon, Dropdown, Menu, Avatar } from 'antd';

import UserSettingsModal from './../UserSettingsModal/UserSettingsModal.component';

import SignInAndSignUp from './../SignInAndSignUp/SignInAndSignUp.component';

import {connect} from 'react-redux';

import {selectUserAuth} from './../../redux/currentUser/currentUser.selectors.js';

import {auth} from './../../firebase/firebase.config.js';

const UserProfileBtn = ({currentUser}) => {
  
  let [CurrentModal, setCurrentModal] = useState('');

  const menu = (
    <Menu>
      {
        currentUser ?

          (<Menu.Item onClick = {() => auth.signOut()} >
            <span>Sign Out</span>
          </Menu.Item>)

        :

          (<Menu.Item onClick = {() => setCurrentModal(() => SignInAndSignUp)} >
            <span>Sign In</span>
          </Menu.Item>)
      }

      <Menu.Item>
        <span>Profile Settings</span>
      </Menu.Item>

    </Menu>
  );

  return (
    <div>
       <Dropdown overlay = {menu} trigger = {['hover']} placement = "bottomCenter">
        {currentUser ? <Avatar src = {currentUser.photoURL} className = "pointer" /> : <Icon type = "user" className = "header__control-icon" />}
      </Dropdown>

      {Boolean(CurrentModal) && <UserSettingsModal CurrentModal = {CurrentModal} onModalClose = {() => setCurrentModal('')} /> }
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentUser: selectUserAuth(state)
})

export default connect(mapStateToProps)(UserProfileBtn);