import React from 'react';
import './KundaliContainer.styles.scss';

import {connect} from 'react-redux';

import {selectKundaliCharts, selectBhavas} from './../../redux/kundali/kundali.selectors.js';
import {selectVisibleCharts} from './../../redux/visibleCharts/visibleCharts.selectors.js';

import GridContainer from './../GridContainer/GridContainer.component';
import Kundali from './../Kundali/Kundali.component';

const KundaliContainer = ({charts, divisionalChart, visibleCharts, bhavas}) => {

  let isChartsValid = charts && Object.keys(charts).length > 0;

  return (
    <div className = "kundali-container">

      <GridContainer rows = "3" cols = "2" gridGap = "1rem">

        {
          isChartsValid && visibleCharts.map((chart, index) => (<Kundali key = {index} bhavas = {bhavas(chart)} />))
        }
      </GridContainer>
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  charts: selectKundaliCharts(state),
  bhavas: (DChartNumber) => selectBhavas(DChartNumber)(state),
  visibleCharts: selectVisibleCharts(state)
})

export default connect(mapStateToProps)(KundaliContainer);