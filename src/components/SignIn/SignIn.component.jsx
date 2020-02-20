import React, {useState} from 'react';
import './SignIn.styles.scss';

import {Form, Button, Input} from 'antd';

import {connect} from 'react-redux';

import {setCurrentUser} from './../../redux/currentUser/currentUser.actions.js';

import {auth, signInWithGoogle} from './../../firebase/firebase.config.js';

const SignIn = (props) => {

  let [signInDetails, setSignInDetails] = useState({email: '', password: ''});

  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignInDetails({...signInDetails, [name]: value})
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.closeModal();
  }

  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(() => props.closeModal())
    .catch((err) => alert("Error! Please Try Again Later"))
  }

  return (
    <Form onSubmit = {handleSubmit} >
      <div className = "margin-u-2"><Input size = "large" required name = "email" placeholder = "Email" label = "Email" onChange = {handleChange} /></div>
      <div className = "margin-u-2"><Input size = "large" required type = "password" name = "password" placeholder = "Password"  onChange = {handleChange} /></div>
      <div className = "text-center margin-u-3">
        <Button type = "outlined" htmlType = "submit">Sign In</Button>
        <Button type = "primary" className = "margin-l-1" onClick = {handleGoogleSignIn} >Sign In With Google</Button>
      </div>
    </Form>
  );

}

const mapDispatchToProps = (dispatch) => ({
  setUser: (userAuth) => dispatch(setCurrentUser(userAuth))
})

export default connect(null, mapDispatchToProps)(SignIn);