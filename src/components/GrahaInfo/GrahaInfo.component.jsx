import React from 'react';
import './GrahaInfo.styles.scss';

import {connect} from 'react-redux';

import {selectOrderedGrahas} from './../../redux/kundali/kundali.selectors';

const GrahaInfo = ({grahas}) => {
  let isGrahasValid = Boolean(grahas(1));

  return (
    <div className = "graha-info">
      <table>
          <thead>
              <tr>
                  <th>Graha</th>
                  <th>Longitude</th>
                  <th>Rashi</th>
                  <th>Nakshatra</th>
                  <th>Pada</th>
                  <th>IsRetrograde</th>
              </tr>
          </thead>

          <tbody>
              {
                  isGrahasValid && grahas(1).map(graha => (
                      <tr key = {graha.body} >
                          <td>{graha.body}</td>
                          <td>{graha.longitude.toFixed(2)}</td>
                          <td>{graha.rashi.name}</td>
                          <td>{graha.nakshatra.nakshatra}</td>
                          <td>{graha.nakshatra.pada}</td>
                          <td>{String(graha.isRetrograde)}</td>
                      </tr>
                  ))
              }
          </tbody>
      </table>
  </div>
  );
}

const mapStateToProps = (state) => ({
  grahas: (chartNumber) => selectOrderedGrahas(chartNumber)(state)
})

export default connect(mapStateToProps)(GrahaInfo);