import {createSelector} from 'reselect';

import {orderGrahas} from './kundali.utils';

export const selectCurrentKundaliObject = (state) => state.currentKundali;

export const selectCurrentKundali = createSelector(
    [selectCurrentKundaliObject],
    (kundali) => kundali.kundali
)

export const selectCurrentKundaliFetchStatus = createSelector(
    [selectCurrentKundaliObject],
    (kundali) => kundali.isFetching
)

export const selectCurrentKundaliFetchErrorStatus = createSelector(
    [selectCurrentKundaliObject],
    (kundali) => kundali.errorMessage
)

export const selectCurrentKundaliCharts = createSelector(
    [selectCurrentKundali],
    (kundali) => kundali && kundali.charts
);

export const selectDivisionalChart = (divisionalChart) => {
    return createSelector(
        [selectCurrentKundaliCharts],
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