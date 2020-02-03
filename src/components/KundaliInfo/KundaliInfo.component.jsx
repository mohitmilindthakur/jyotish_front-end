import React from 'react';
import './KundaliInfo.styles.scss';
import GrahaInfo from './../GrahaInfo/GrahaInfo.component';


const KundaliInfo = (props) => (
    <div className = "kundali-info">
        <GrahaInfo grahas = {props.grahas} />
    </div>
)

export default KundaliInfo;