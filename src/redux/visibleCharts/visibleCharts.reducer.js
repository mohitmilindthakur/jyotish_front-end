import visibleChartsTypes from './visibleCharts.types';



const INITIAL_STATE = [1, 1, 1, 1, 1, 1];

const visibleChartsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case visibleChartsTypes.ADD_CHART_TO_DISPLAY:
            return [...state, action.payload]

        case visibleChartsTypes.REMOVE_CHART_TO_DISPLAY:
            return state.filter(chartNumber => chartNumber !== action.payload)

        case visibleChartsTypes.DISPLAY_DEFAULT_CHARTS:
            return [1, 1, 1, 1, 1, 1]

        case visibleChartsTypes.SET_CHARTS_TO_DISPLAY:
            return [...action.payload]

        case visibleChartsTypes.SET_DISPLAY_ORDER_OF_CHARTS:
            return [...action.payload]

        case visibleChartsTypes.REPLACE_CHART_TO_DISPLAY:
            let chartIndex = state.indexOf(action.payload.chartToBeReplaced);
            return [...state.slice(0, chartIndex), action.payload.chartToReplace, ...state.slice(chartIndex + 1, state.length)];

        default:
            return state;
    }
}

export default visibleChartsReducer;