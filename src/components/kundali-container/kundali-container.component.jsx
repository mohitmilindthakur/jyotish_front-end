import React from 'react';
import './kundali-container.styles.scss';
import Kundali from './../kundali/kundali.component'
import GridContainer from "./../GridContainer/GridContainer.component";

const KundaliContainer = (props) => (
    <div className = "kundali-container">

        <GridContainer rows = {3} cols = {2} gridGap = {'10px'} >
      {
          props && props.charts && Object.keys(props.charts).map(chart => (
              <Kundali bhavas = {props.charts[chart].bhavas} name = {chart}/> 
          ))
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas}/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas}/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas}/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas}/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas}/>
      }
      </GridContainer>
      
    </div>
)

export default KundaliContainer;