import { EChartsOption } from 'echarts'

/**
 * Returns an EChartsOption object for an area chart given a dataset.
 *
 * @param {Object} options - Optional parameters for the chart.
 * @param {EChartsOption['dataset']} options.dataset - The dataset for the chart.
 * @return {EChartsOption} An EChartsOption object for an area chart.
 */
export const areaChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  return {
    dataset,
    tooltip: {
      trigger: 'axis',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        type: 'line',
        areaStyle: {
          opacity: 0.1,
        },
        smooth: true,
        symbol: 'none',
      },
    ],
    grid: {
      left: 0,
      right: 0,
      bottom: 0,
      top: 0,
    },
  }
}
