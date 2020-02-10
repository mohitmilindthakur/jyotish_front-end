import React from 'react';
import './Toolbar.styles.scss';
import CreateNewKundaliBtn from './../CreateNewKundaliBtn/CreateNewKundaliBtn.component';
import BirthDetailsControl from './../BirthDetailsControl/BirthDetailsControl.component';
import ToolbarBirthDetialsInfo from './../ToolbarBirthDetialsInfo/ToolbarBirthDetialsInfo.component';
import {Grid} from '@material-ui/core';


const Toolbar = (props) => {
  
// lg = {6} xs = {6} md = {3} xl = {3}
  return (
    <Grid item container className = "toolbar" justify = "space-around">
      <Grid item>
        <BirthDetailsControl />
      </Grid>
      <Grid item>
        <ToolbarBirthDetialsInfo />
      </Grid>
      <Grid item>
        <BirthDetailsControl />
      </Grid>
    </Grid>
  )
}

export default Toolbar;
