import React from 'react';



const CurrentChartDetails = React.createContext({});

export const CurrentChartDetailsProvider = CurrentChartDetails.Provider;

export const CurrentChartDetailsConsumer = CurrentChartDetails.Consumer;

export default CurrentChartDetails;