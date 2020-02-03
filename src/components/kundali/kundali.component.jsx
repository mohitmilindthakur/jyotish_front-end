import React, { Fragment } from "react";
import "./kundali.styles.scss";
import {planet_svg_positions, sign_svg_positions} from './kundali-svg.config';

const Kundali = (props) => (
  <div className="kundali"
    style = {{
        height: props.height+'px',
        width: props.width+'px'
    }}
  >
    <svg
      width="100%"
      height="100%"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect className = "rect" x="0" y="0" width="100%" height="100%" />
      <line className = "line" x1="0" y1="0" x2="100%" y2="100%" />
      <line className = "line" x1="100%" y1="0" x2="0" y2="100%" />
      <line className = "line" x1="0" y1="50%" x2="50%" y2="0" />
      <line className = "line" x1="50%" y1="0" x2="100%" y2="50%" />
      <line className = "line" x1="100%" y1="50%" x2="50%" y2="100%" />
      <line className = "line" x1="50%" y1="100%" x2="0" y2="50%" />
      {
        props && props.bhavas && props.bhavas.map(({ rashi, grahas, house }, index) => {
            let all_grahas = grahas.join(" ");
            return (
            <Fragment key = {house} >
            {
                grahas.length > 3
                ? 
                (
                    <text className = "planet" x={planet_svg_positions[index][0]} y={planet_svg_positions[index][1]} textAnchor = "middle">

                        <tspan className = "planet" x={planet_svg_positions[index][0]}>{grahas.slice(0, 3).join(" ")}</tspan>

                        <tspan dy = "5%" className = "planet" x={planet_svg_positions[index][0]} textAnchor = "middle">{grahas.slice(2, grahas.length).join(" ")}</tspan>

                    </text>       
                )
                :
                    <text className = "planet" x={planet_svg_positions[index][0]} y={planet_svg_positions[index][1]} textAnchor = "middle">
                        {all_grahas}
                    </text>

            }
                <text className = "sign" x={sign_svg_positions[index][0]} y={sign_svg_positions[index][1]} textAnchor = "middle">
                {rashi.number}
                </text>
            </Fragment>
            );
      })}
    </svg>
  </div>
);

export default Kundali;
