import React from 'react';
import './UserControl.styles.scss';
import { Row, Col } from 'antd';

import UserSettingsBtn from './../UserSettingsBtn/UserSettingsBtn.component';
import UserProfileBtn from './../UserProfileBtn/UserProfileBtn.component';

console.log('UserProfileBtn', UserProfileBtn)

const UserControl = (props) => {

  return (
    <Row type = "flex" justify = "space-around">

      <Col>
        <UserSettingsBtn />
      </Col>

      <Col>
        <UserProfileBtn />
      </Col>

    </Row>
  )
}

export default UserControl;
