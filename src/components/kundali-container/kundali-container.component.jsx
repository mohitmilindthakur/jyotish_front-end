import React from 'react';
import './kundali-container.styles.scss';
import Kundali from './../kundali/kundali.component'


const KundaliContainer = (props) => (
    <div className = "kundali-container">
      {
          props && props.charts && Object.keys(props.charts).map(chart => (
              <Kundali bhavas = {props.charts[chart].bhavas} name = {chart} width = "400" height = "400"/> 
          ))
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas} width = "400" height = "400"/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas} width = "400" height = "400"/>
      }

      {
          props && props.charts && <Kundali bhavas = {props.charts.d1.bhavas} width = "400" height = "400"/>
      }
      
    </div>
)

export default KundaliContainer;