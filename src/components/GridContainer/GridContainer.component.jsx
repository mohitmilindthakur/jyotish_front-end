import React from "react";
import "./GridContainer.styles.scss";

const GridContainer = ({ rows, cols, children, gridGap }) => (
  <div
    className="grid-container"
    style={{
      "grid-template-rows": `repeat(${rows}, 1fr)`,
      "grid-template-columns": `repeat(${cols}, 1fr)`,
      "grid-gap": gridGap
    }}
  >
    {children}
  </div>
)

export default GridContainer;
