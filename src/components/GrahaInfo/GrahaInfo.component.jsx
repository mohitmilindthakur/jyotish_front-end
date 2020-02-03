import React from 'react';
import './GrahaInfo.styles.scss';

const GrahaInfo = (props) => (
    <table className = "graha-info">
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
                props && props.grahas && Object.keys(props.grahas).map(graha => (
                    <tr>
                        <td>{graha}</td>
                        <td>{props.grahas[graha].longitude.toFixed(2)}</td>
                        <td>{props.grahas[graha].rashi.name}</td>
                        <td>{props.grahas[graha].nakshatra.nakshatra}</td>
                        <td>{props.grahas[graha].nakshatra.pada}</td>
                        <td>{String(props.grahas[graha].isRetrograde)}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
)

export default GrahaInfo;
