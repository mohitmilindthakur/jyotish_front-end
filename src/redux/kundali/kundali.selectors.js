import {createSelector} from 'reselect';

import {orderGrahas} from './kundali.utils';

export const selectKundali = (state) => state.kundali;

export const selectKundaliCharts = createSelector(
    [selectKundali],
    (kundali) => kundali && kundali.charts
);

export const selectDivisionalChart = (divisionalChart) => {
    return createSelector(
        [selectKundaliCharts],
        (charts) => charts && charts[`d${divisionalChart}`]
    )
};

export const selectGrahas = (divisionalChart) => {
    return createSelector(
        [selectDivisionalChart(divisionalChart)],
        (DChartData) => DChartData && DChartData.grahas
    )
}

export const selectOrderedGrahas = (divisionalChart) => {
    return createSelector(
        [selectDivisionalChart(divisionalChart)],
        (DChartData) => DChartData && orderGrahas(DChartData.grahas)
    )
}

export const selectBhavas = (divisionalChart) => {
    return createSelector(
        [selectDivisionalChart(divisionalChart)],
        (DChartData) => DChartData && DChartData.bhavas
    )
}