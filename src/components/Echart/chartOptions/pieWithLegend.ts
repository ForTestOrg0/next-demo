import { EChartsOption } from 'echarts'

export const pieWithLegendChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  return {
    dataset,
    tooltip: {
      trigger: 'item',
    },
    legend: {
      show: true,
      orient: 'vertical',
      right: 10,
      top: 'center',
      bottom: 20,
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '92%'],
        center: ['23%', '50%'],
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
