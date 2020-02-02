import React, { Fragment } from "react";
import "./Kundali.styles.scss";

let p = [
  {
    house: 1,
    sign: {
      name: "Libra",
      number: 7
    },
    planets: ["Mo", "Ve", "Me"]
  },
  {
    house: 2,
    sign: {
      name: "Scorpio",
      number: 8
    },
    planets: ["Su", "Ju"]
  },

  {
    house: 3,
    sign: {
      name: "Sagitarius",
      number: 9
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 4,
    sign: {
      name: "Capricorn",
      number: 10
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 5,
    sign: {
      name: "Aquarius",
      number: 11
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 6,
    sign: {
      name: "Pisces",
      number: 12
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 7,
    sign: {
      name: "Aries",
      number: 1
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 8,
    sign: {
      name: "Taurus",
      number: 2
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 9,
    sign: {
      name: "Gemini",
      number: 3
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 10,
    sign: {
      name: "Cancer",
      number: 4
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 11,
    sign: {
      name: "Leo",
      number: 5
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  },

  {
    house: 12,
    sign: {
      name: "Virgo",
      number: 6
    },
    planets: ["Ve", "Me", "ke", "Ra"]
  }
];

let planet_positions = [["50%", "25%"], ["25%", "10%"], ["10%", "20%"], ["25%", "47%"], ["10%", "73%"], ["25%", "90%"], ["50%", "75%"], ["75%", "90%"], ["90%", "73%"], ["75%", "50%"], ["90%", "23%"], ["75%", "9%"] ];
let sign_positions = [["50%", "45%"], ["25%", "20%"], ["20%", "27%"], ["42%", "50%"], ["20%", "77%"], ["25%", "82%"], ["50%", "55%"], ["75%", "82%"], ["79%", "77%"], ["56%", "51%"], ["79%", "26%"], ["75%", "22%"] ];
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
      <rect x="0" y="0" width="100%" height="100%" fill="#e1f4f3" />
      <line x1="0" y1="0" x2="100%" y2="100%" stroke="#333333" />
      <line x1="100%" y1="0" x2="0" y2="100%" stroke="#333333" />
      <line x1="0" y1="50%" x2="50%" y2="0" stroke="#333333" />
      <line x1="50%" y1="0" x2="100%" y2="50%" stroke="#333333" />
      <line x1="100%" y1="50%" x2="50%" y2="100%" stroke="#333333" />
      <line x1="50%" y1="100%" x2="0" y2="50%" stroke="#333333" />
      {p.map(({ sign, planets }, index) => {
        let all_planets = planets.join(" ");
        console.log(index);
        return (
          <Fragment>
          {
              planets.length > 3
              ? 
              (
                 <text x={planet_positions[index][0]} y={planet_positions[index][1]} font-size="15" text-anchor = "middle" fill="#333333">

                    <tspan x={planet_positions[index][0]}>{planets.slice(0, 3).join(" ")}</tspan>

                    <tspan dy = "5%" x={planet_positions[index][0]} text-anchor = "middle">{planets.slice(2, planets.length).join(" ")}</tspan>

                 </text>       
              )
              :
                <text x={planet_positions[index][0]} y={planet_positions[index][1]} font-size="15" text-anchor = "middle" fill="#333333">
                    {all_planets}
                </text>

          }
            <text x={sign_positions[index][0]} y={sign_positions[index][1]} font-size="15" text-anchor = "middle" fill="#333333">
              {sign.number}
            </text>
          </Fragment>
        );
      })}
    </svg>
  </div>
);

export default Kundali;
