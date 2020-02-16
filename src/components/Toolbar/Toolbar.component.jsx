import React from 'react';
import './Toolbar.styles.scss';
import BirthDetailsControl from './../BirthDetailsControl/BirthDetailsControl.component';
import BirthDetailsToolbarInfo from './../BirthDetailsToolbarInfo/BirthDetailsToolbarInfo.component';
import UserControl from './../UserControl/UserControl.component';
import {Grid} from '@material-ui/core';


const Toolbar = (props) => {
  
// lg = {6} xs = {6} md = {3} xl = {3}
  return (
    <Grid item container className = "toolbar" justify = "space-around">
      <Grid item>
        <BirthDetailsControl />
      </Grid>
      <Grid item align = "center">
        <BirthDetailsToolbarInfo />
      </Grid>
      <Grid item>
        <UserControl />
      </Grid>
    </Grid>
  )
}

export default Toolbar;
