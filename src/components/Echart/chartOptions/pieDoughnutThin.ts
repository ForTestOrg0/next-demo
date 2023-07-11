import { EChartsOption } from 'echarts'

/**
 * Returns an EChartsOption object that represents a pie doughnut thin chart,
 * using the provided dataset.
 *
 * @param {Object} options - An object containing the following:
 * @param {EChartsOption['dataset']} options.dataset - The dataset to be used in the chart.
 * @return {EChartsOption} An EChartsOption object representing a pie chart.
 */
export const pieDoughnutThinChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
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
        radius: ['75%', '92%'],
        avoidLabelOverlap: false,
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
