import React from 'react';
import './MainContent.styles.scss';
import {Grid} from '@material-ui/core';
import KundaliContainer from './../kundali-container/kundali-container.component';
import KundaliInfo from './../KundaliInfo/KundaliInfo.component';


const MainContent = (props) => {
  return (
    <div className="main-content">
      <Grid container className = "main-content__grid" >
        <Grid item lg = {6} xl = {5} sm = {12} xs = {12} md = {6} >
          <KundaliContainer></KundaliContainer>
        </Grid>
        <Grid container item lg = {6} xl = {6} sm = {12} xs = {12} md = {6} >
          <KundaliInfo></KundaliInfo>
        </Grid>
      </Grid>
    </div>
  )
}

export default MainContent;
