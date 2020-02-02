import React from 'react';
import './kundali-container.styles.scss';
import Kundali from './../kundali/kundali.component'


const KundaliContainer = (props) => (
    <div>
        <div className="container">
            <Kundali bhavas = {props.bhavas} height = "400" width = "400" />
            <div style = {{margin: '10px'}}></div>
            <Kundali bhavas = {props.bhavas} height = "400" width = "400" />
        </div>
        
        <div style = {{margin: '10px'}}></div>

        <div className="container">
            <Kundali bhavas = {props.bhavas} height = "400" width = "400" />
            <div style = {{margin: '10px'}}></div>
            <Kundali bhavas = {props.bhavas} height = "400" width = "400" />
      </div>
    </div>
)

export default KundaliContainer;