import {createSelector} from 'reselect';

import {orderGrahas} from './kundali.utils';

export const selectKundaliObject = (state) => state.kundali;

export const selectKundali = createSelector(
    [selectKundaliObject],
    (kundali) => kundali.kundali
)

export const selectKundaliFetchStatus = createSelector(
    [selectKundaliObject],
    (kundali) => kundali.isFetching
)

export const selectKundaliFetchErrorStatus = createSelector(
    [selectKundaliObject],
    (kundali) => kundali.errorMessage
)

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