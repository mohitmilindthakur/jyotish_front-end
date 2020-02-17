import React from 'react';
import './KundaliContainer.styles.scss';

import {connect} from 'react-redux';

import {selectKundali, selectKundaliCharts, selectDivisionalChart} from './../../redux/kundali/kundali.selectors.js';

import GridContainer from './../GridContainer/GridContainer.component';
import Kundali from './../Kundali/Kundali.component';

const KundaliContainer = ({charts, divisionalChart}) => {

  let isChartsValid = charts && Object.keys(charts).length > 0;

  return (
    <div style = {{border: '1px solid purple', height: '100%'}} className = "kundali-container">
      <GridContainer rows = "3" cols = "2" gridGap = "1rem">
        <Kundali />
        <Kundali />
        <Kundali />
        <Kundali />
        <Kundali />
        <Kundali />
      </GridContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  charts: selectKundaliCharts(state),
  divisionalChart: (DChartNumber) => selectDivisionalChart(DChartNumber)(state)
})

export default connect(mapStateToProps)(KundaliContainer);