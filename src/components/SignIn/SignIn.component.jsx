import React, {useState} from 'react';
import './SignIn.styles.scss';

import {Form, Button, Input} from 'antd';

const SignIn = (props) => {

  let [signInDetails, setSignInDetails] = useState({email: '', password: ''});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignInDetails({...signInDetails, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(signInDetails);
  }

  return (
    <Form onSubmit = {handleSubmit} >
      <div className = "margin-u-2"><Input size = "large" required name = "email" placeholder = "Email" label = "Email" onChange = {handleChange} /></div>
      <div className = "margin-u-2"><Input size = "large" required type = "password" name = "password" placeholder = "password"  onChange = {handleChange} /></div>
      <div className = "text-center margin-u-3">
        <Button type = "outlined" htmlType = "submit">Sign In</Button>
        <Button type = "primary" htmlType = "submit" className = "margin-l-1">Sign In With The Google</Button>
      </div>
    </Form>
  );

}

export default SignIn;
