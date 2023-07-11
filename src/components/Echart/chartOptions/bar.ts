import { EChartsOption } from 'echarts'

export const barChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
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
        type: 'bar',
        itemStyle: {
          opacity: 0.2,
          borderRadius: 2,
        },
        barMinHeight: 1,
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
      },
    ],
    grid: {
      left: 15,
      right: 15,
      bottom: 0,
      top: 0,
    },
  }
}
