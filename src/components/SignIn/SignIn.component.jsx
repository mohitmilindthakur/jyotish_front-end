import React, {useState} from 'react';
import './SignIn.styles.scss';

import {Form, Button, Input, Spin} from 'antd';

import {connect} from 'react-redux';

import {setCurrentUser} from './../../redux/currentUser/currentUser.actions.js';

import {auth, signInWithGoogle} from './../../firebase/firebase.config.js';

const SignIn = (props) => {

  let [signInDetails, setSignInDetails] = useState({email: '', password: ''});
  let [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    const {name, value} = event.target;
    setSignInDetails({...signInDetails, [name]: value})
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    signInWithGoogle()
    .then(() => {
      setIsLoading(false);
      props.closeModal()
    })
    .catch((err) => {
      alert("Error! Please Try Again Later");
      setIsLoading(false)
    })
  }

  const handleSignIn = (event) => {
    event.preventDefault();
    setIsLoading(true);
    auth.signInWithEmailAndPassword(signInDetails.email, signInDetails.password)
    .then(() => {
      props.closeModal();
      setIsLoading(false);
    })
    .catch(error => {
      alert(error.message);
      setIsLoading(false);
    })
  }

  return (
    <Form onSubmit = {handleSignIn} >
      <div className = "margin-u-2"><Input size = "large" required name = "email" placeholder = "Email" label = "Email" onChange = {handleChange} /></div>
      <div className = "margin-u-2"><Input size = "large" required type = "password" name = "password" placeholder = "Password"  onChange = {handleChange} /></div>
      {
        isLoading ? 
        
          <Spin className = "text-center"></Spin>

          :

          (<div className = "text-center margin-u-3">
            <Button type = "outlined" htmlType = "submit">Sign In</Button>
            <Button type = "primary" className = "margin-l-1" onClick = {handleGoogleSignIn} >Sign In With Google</Button>
          </div>)
      }
    </Form>
  );

}

const mapDispatchToProps = (dispatch) => ({
  setUser: (userAuth) => dispatch(setCurrentUser(userAuth))
})

export default connect(null, mapDispatchToProps)(SignIn);