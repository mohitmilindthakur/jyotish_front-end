import React from 'react';
import './KundaliContainer.styles.scss';

import GridContainer from './../GridContainer/GridContainer.component';
import Kundali from './../Kundali/Kundali.component';

const KundaliContainer = (props) => {
  
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


export default KundaliContainer;
