import {createSelector} from 'reselect';

export const selectKundali = (state) => state.kundali;

export const selectKundaliCharts = createSelector(
    [selectKundali],
    (kundali) => kundali.charts
);

export const selectDivisionalChart = (divisionalChart) => {
    return createSelector(
        [selectKundaliCharts],
        (charts) => charts[`d${divisionalChart}`]
    )
};