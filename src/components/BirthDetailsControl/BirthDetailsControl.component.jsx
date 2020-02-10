import React from 'react';
import './BirthDetailsControl.styles.scss';
import {Grid} from '@material-ui/core';
import CreateNewKundaliBtn from './../CreateNewKundaliBtn/CreateNewKundaliBtn.component';
import EditKundaliBtn from './../EditKundaliBtn/EditKundaliBtn.component';


const BirthDetailsControl = (props) => {
  return (
    <Grid item container>
      <Grid item>
        <CreateNewKundaliBtn />
      </Grid>

      <Grid item>
        <EditKundaliBtn />
      </Grid>

    </Grid>
  )
}

export default BirthDetailsControl;
