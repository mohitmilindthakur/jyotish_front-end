import React from 'react';
import './SignUp.styles.scss';
import {auth} from './../../firebase/firebase.config.js';
import {addUserToFirestore} from './../../firebase/firestore/firestore';


import {Input, Button} from 'antd';

const SignUp = (props) => {

  const [formData, setFormData] = React.useState({displayName: '', email: '', password: '', confirmPassword: ''});

  const handleChange = (event) => {
    let {name, value} = event.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {displayName, email, password, confirmPassword} = formData;
    if (password !== confirmPassword) alert('Password Dont Match!')

    try {
      const {user} = await auth.createUserWithEmailAndPassword(email, password);
      await addUserToFirestore(user, {displayName});
      props.closeModal();
      
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <form onSubmit = {handleSubmit} className = "sign-up-form">
      <Input size = "large" onChange = {handleChange} required placeholder = "Display Name" value = {formData.displayName} name = "displayName"/>
      <Input size = "large" onChange = {handleChange} required placeholder = "Email" type = "email" value = {formData.email} name = "email"/>
      <Input.Password size = "large" onChange = {handleChange} required placeholder = "Password" value = {formData.password} name="password"/>
      <Input.Password size = "large" onChange = {handleChange} required placeholder = "Confirm Password" value = {formData.confirmPassword} name = "confirmPassword"/>
      <Button type = "outlined" htmlType = "submit" >Sign Up </Button>
    </form>
  )
}

export default SignUp;
