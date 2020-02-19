import React, {useState} from 'react';
import './UserProfileBtn.styles.scss';
import { Icon, Dropdown, Menu } from 'antd';

import UserSettingsModal from './../UserSettingsModal/UserSettingsModal.component';

import SignInAndSignUp from './../SignInAndSignUp/SignInAndSignUp.component';

const UserProfileBtn = (props) => {
  
  let [CurrentModal, setCurrentModal] = useState('');

  const menu = (
    <Menu>

      <Menu.Item onClick = {() => setCurrentModal(() => SignInAndSignUp)} >
        <span>Sign In</span>
      </Menu.Item>

      <Menu.Item>
        <span>Profile Settings</span>
      </Menu.Item>

    </Menu>
  );

  return (
    <div>
       <Dropdown overlay = {menu} trigger = {['hover']} placement = "bottomCenter">
        <Icon type = "user" className = "header__control-icon" />
      </Dropdown>

      {Boolean(CurrentModal) && <UserSettingsModal CurrentModal = {CurrentModal} onModalClose = {() => setCurrentModal('')} /> }
    </div>
  );
}

export default UserProfileBtn;