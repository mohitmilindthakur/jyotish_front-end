import React from 'react';
import './GrahaInfo.styles.scss';

const GrahaInfo = (props) => (
    <table>
        <thead>
            <tr>
                <th>Graha</th>
                <th>Rashi</th>
                <th>Nakshatra</th>
                <th>Pada</th>
                <th>IsRetrograde</th>
            </tr>
        </thead>

        <tbody>
            {
                props && props.grahas && Object.keys(props.grahas).map(graha => (
                    <tr>
                        <td>{graha}</td>
                        <td>{props.grahas[graha].rashi}</td>
                        <td>{props.grahas[graha].nakshatra.nakshatra}</td>
                        <td>{props.grahas[graha].nakshatra.pada}</td>
                        <td>{props.grahas[graha].rashi}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)

export default GrahaInfo;
