import React from 'react';
import './SignIn.styles.scss';
import {TextField, Button} from '@material-ui/core';
import {signInWithGoogle} from './../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(){
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    let {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    return (
      <div className = "sign-in">
        <h1 className="sign-in__header">I Already Have An Account</h1>
        <form className="sign-in__form" onSubmit = {this.handleSubmit} >
          <TextField type="text" name="email" onChange = {this.handleChange}/>
          <TextField type="password" name="password" onChange = {this.handleChange}/>
          <Button>Sign In</Button>
          <Button onClick = {signInWithGoogle} >Sign In With Google</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
