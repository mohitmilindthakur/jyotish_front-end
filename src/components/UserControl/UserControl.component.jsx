import React from 'react';
import './UserControl.styles.scss';
import SettingsIcon from '@material-ui/icons/Settings';
import {Grid} from '@material-ui/core';
import UserSettings from './../UserSettings/UserSettings.component';
import SignInAndSignUp from './../SignInAndSignUp/SignInAndSignUp.component';
import UserProfile from './../UserProfile/UserProfile.component';

const UserControl = (props) => {
  return (
    <Grid item container>
      <Grid item>
        <UserSettings/>
      </Grid>
      <Grid item>
        <UserProfile />
      </Grid>
    </Grid>
  )
}

export default UserControl;
