import { EChartsOption } from 'echarts'

/**
 * Returns an EChartsOption object that represents a pie chart,
 * using the provided dataset.
 *
 * @param {Object} options - An object containing the following:
 * @param {EChartsOption['dataset']} options.dataset - The dataset to be used in the chart.
 * @return {EChartsOption} An EChartsOption object representing a pie chart.
 */
export const pieChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  return {
    dataset,
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: false,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '92%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: '#ffffff',
          borderWidth: 1,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 12,
          },
        },
        labelLine: {
          show: false,
        },
        minAngle: 3,
      },
    ],
  }
}
