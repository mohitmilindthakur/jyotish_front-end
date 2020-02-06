import React, {useContext} from 'react';
import './kundali-container.styles.scss';
import Kundali from './../kundali/kundali.component'
import GridContainer from "./../GridContainer/GridContainer.component";
import ChartDetails from './../../CurrentChart.context.js';


const KundaliContainer = (props) => {

    const charts = useContext(ChartDetails);

    return (
        <div className = "kundali-container">

            <GridContainer rows = {3} cols = {2} gridGap = {'10px'} >
            
                {
                    Object.keys(charts.charts).map(chart => (
                        <Kundali key = {chart} bhavas = {charts.charts[chart].bhavas} name = {chart}/> 
                    ))
                }

                {
                    <Kundali bhavas = {charts.charts.d1.bhavas}/>
                }

                {
                    <Kundali bhavas = {charts.charts.d1.bhavas}/>
                }

                {
                    <Kundali bhavas = {charts.charts.d1.bhavas}/>
                }

                {
                    <Kundali bhavas = {charts.charts.d1.bhavas}/>
                }

                {
                    <Kundali bhavas = {charts.charts.d1.bhavas}/>
                }

        </GridContainer>
        </div>
    )
}

export default KundaliContainer;