import React from 'react';
import './GridContainer.styles.scss';


const GridContainer = ({children, rows, cols, gridGap}) => {

  return (
    <div
      className="grid-container"
      style={{
        "gridTemplateRows": `repeat(${rows}, 1fr)`,
        "gridTemplateColumns": `repeat(${cols}, 1fr)`,
        "gridGap": gridGap
      }}
    >
      {children}
  </div>
  )
}

export default GridContainer;
