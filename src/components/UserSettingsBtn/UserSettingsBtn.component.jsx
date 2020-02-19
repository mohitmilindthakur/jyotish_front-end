import React, {useState} from 'react';
import './UserSettingsBtn.styles.scss';

import { Icon, Dropdown, Menu} from 'antd';

import UserSettingsModal from './../UserSettingsModal/UserSettingsModal.component';
import UserKundaliSettings from './../UserKundaliSettings/UserKundaliSettings.component';

console.log(UserKundaliSettings);


const UserSettingsBtn = (props) => {

  let [CurrentModal, setCurrentModal] = useState('');

  const menu = (
    <Menu>

      <Menu.Item onClick = {() => setCurrentModal(UserKundaliSettings)}>
        <span>Kundali Settings</span>
      </Menu.Item>

      <Menu.Item>
        <span>Layout Settings</span>
      </Menu.Item>

    </Menu>
  );

  return (
    <div>
      <Dropdown overlay = {menu} trigger = {['hover']} placement = "bottomCenter">
        <Icon type = "setting" className = "header__control-icon"/>
      </Dropdown>

      <UserSettingsModal render = {() => CurrentModal } onModalClose = {() => setCurrentModal('')} />

    </div>
  );
}

export default UserSettingsBtn;
