import React from 'react';



let CurrentUserContext = React.createContext(null);

export const CurrentUserProvider = CurrentUserContext.Provider;
export const CurrentUserConsumer = CurrentUserContext.Consumer;

export default CurrentUserContext;