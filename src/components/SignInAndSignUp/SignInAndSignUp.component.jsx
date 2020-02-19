import React from 'react';
import './SignInAndSignUp.styles.scss';


import {connect} from 'react-redux';

import SignIn from './../SignIn/SignIn.component';


import {Tabs} from 'antd';

const SignInAndSignUp = (props) => {
  return (
    <Tabs defaultActiveKey = "1">

      <Tabs.TabPane tab = "Sign In" key = "1">
        <SignIn closeModal = {props.closeModal} />
      </Tabs.TabPane>

      <Tabs.TabPane tab = "Sign Up" key = "2">
        Sign Up
      </Tabs.TabPane>

    </Tabs>
  );
}

export default connect(null, null)(SignInAndSignUp);