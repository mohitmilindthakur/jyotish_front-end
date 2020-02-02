import React, { Fragment } from "react";
import "./kundali.styles.scss";
import {planet_svg_positions, sign_svg_positions} from './kundali-svg.config';

// let p = [
//   {
//     house: 1,
//     sign: {
//       name: "Libra",
//       number: 7
//     },
//     planets: ["Mo"]
//   },
//   {
//     house: 2,
//     sign: {
//       name: "Scorpio",
//       number: 8
//     },
//     planets: ["Su", "Ju"]
//   },

//   {
//     house: 3,
//     sign: {
//       name: "Sagitarius",
//       number: 9
//     },
//     planets: ["Ve"]
//   },

//   {
//     house: 4,
//     sign: {
//       name: "Capricorn",
//       number: 10
//     },
//     planets: ["ke"]
//   },

//   {
//     house: 5,
//     sign: {
//       name: "Aquarius",
//       number: 11
//     },
//     planets: []
//   },

//   {
//     house: 6,
//     sign: {
//       name: "Pisces",
//       number: 12
//     },
//     planets: []
//   },

//   {
//     house: 7,
//     sign: {
//       name: "Aries",
//       number: 1
//     },
//     planets: []
//   },

//   {
//     house: 8,
//     sign: {
//       name: "Taurus",
//       number: 2
//     },
//     planets: []
//   },

//   {
//     house: 9,
//     sign: {
//       name: "Gemini",
//       number: 3
//     },
//     planets: []
//   },

//   {
//     house: 10,
//     sign: {
//       name: "Cancer",
//       number: 4
//     },
//     planets: []
//   },

//   {
//     house: 11,
//     sign: {
//       name: "Leo",
//       number: 5
//     },
//     planets: []
//   },

//   {
//     house: 12,
//     sign: {
//       name: "Virgo",
//       number: 6
//     },
//     planets: []
//   }
// ];

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
        props.bhavas && props.bhavas && props.bhavas.map(({ rashi, grahas, house }, index) => {
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
