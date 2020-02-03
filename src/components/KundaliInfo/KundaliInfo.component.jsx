import React from 'react';
import './KundaliInfo.styles.scss';
import GrahaInfo from './../GrahaInfo/GrahaInfo.component';


const KundaliInfo = (props) => (
    <div className = "kundali-info">
    {
        props.charts && <GrahaInfo grahas = {props.charts.d1.grahas} />
    }
    </div>
)

export default KundaliInfo;