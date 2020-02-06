import React from 'react';



const BirthDetails = React.createContext({});

export const BirthDetailsProvider = BirthDetails.Provider;

export const BirthDetailsConsumer = BirthDetails.Consumer;

export default BirthDetails;