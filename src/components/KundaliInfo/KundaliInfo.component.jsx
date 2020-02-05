import React from 'react';
import './KundaliInfo.styles.scss';
import GrahaInfo from './../GrahaInfo/GrahaInfo.component';
import {Grid} from '@material-ui/core';


const KundaliInfo = (props) => (
    <Grid item container >
        <Grid item lg = {10} sm = {12} xl = {7} >
            {
                <GrahaInfo/>
            }
        </Grid>
    </Grid>
)

export default KundaliInfo;