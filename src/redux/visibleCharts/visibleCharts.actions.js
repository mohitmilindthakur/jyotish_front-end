import visibleChartsTypes from './visibleCharts.types';



const addChartToDisplay = (chartNumber) => ({
    type: visibleChartsTypes.ADD_CHART_TO_DISPLAY,
    payload: chartNumber
})

const removeChartFromDisplay = (chartNumber) => ({
    type: visibleChartsTypes.REMOVE_CHART_FROM_DISPLAY,
    payload: chartNumber
})

const displayDefaultCharts = () => ({
    type: visibleChartsTypes.DISPLAY_DEFAULT_CHARTS
})

const setChartsToDisplay = (chartNumbers) => ({
    type: visibleChartsTypes.SET_CHARTS_TO_DISPLAY,
    payload: chartNumbers
})

const setDisplayOrderOfCharts = (order) => ({
    type: visibleChartsTypes.SET_DISPLAY_ORDER_OF_CHARTS,
    payload: order
})

const replaceChartToDisplay = (chart) => ({
    type: visibleChartsTypes.SET_DISPLAY_ORDER_OF_CHARTS,
    payload: chart
})