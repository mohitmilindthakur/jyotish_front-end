const GRAHA_ORDER = ["La", "Su", "Mo", "Ma", "Me", "Ju", "Ve", "Sa", "Ra"];



export const orderGrahas = (grahas) => GRAHA_ORDER.map(graha => ({...grahas[graha], body: graha}));