import React, {useContext} from 'react';
import './GrahaInfo.styles.scss';
import ChartDetails from './../../CurrentChart.context.js';

const GrahaInfo = (props) => {

    const charts = useContext(ChartDetails);
    const grahas = charts.charts && charts.charts.d1.grahas;
    
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
                        Object.keys(grahas).map(graha => (
                            <tr key = {graha} >
                                <td>{graha}</td>
                                <td>{grahas[graha].longitude.toFixed(2)}</td>
                                <td>{grahas[graha].rashi.name}</td>
                                <td>{grahas[graha].nakshatra.nakshatra}</td>
                                <td>{grahas[graha].nakshatra.pada}</td>
                                <td>{String(grahas[graha].isRetrograde)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default GrahaInfo;
