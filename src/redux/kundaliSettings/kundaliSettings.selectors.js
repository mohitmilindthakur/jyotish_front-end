import ayanamshaToNumberMap from './ayanamshaToNumberMap';


export const selectKundaliSettings = (state) => state.kundaliSettings;



export const selectAllAyanamshas = () => Object.keys(ayanamshaToNumberMap).sort();

// export const selectAyanamshaFromNumber = (ayanamshaNumber) => NumberToAyanamshaMap[ayanamshaNumber];