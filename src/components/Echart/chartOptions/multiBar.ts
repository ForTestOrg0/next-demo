import { EChartsOption } from 'echarts'

export const multiBarChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  return {
    dataset,
    tooltip: {
      trigger: 'axis',
    },
    xAxis: [
      {
        type: 'category',
        show: false,
      },
      {
        gridIndex: 1,
        type: 'category',
        show: false,
        position: 'top',
      },
    ],
    axisPointer: {
      link: [
        {
          xAxisIndex: 'all',
        },
      ],
    },
    yAxis: [
      {
        type: 'value',
        show: false,
        min: 0,
      },
      {
        gridIndex: 1,
        type: 'value',
        show: false,
        min: 0,
        inverse: true,
      },
    ],
    series: [
      {
        type: 'bar',
        itemStyle: {
          opacity: 0.3,
          borderColor: '#fff',
          borderRadius: 2,
        },
        barMinHeight: 1,
        emphasis: {
          itemStyle: {
            opacity: 1,
          },
        },
      },
      {
        type: 'bar',
        xAxisIndex: 1,
        yAxisIndex: 1,
        itemStyle: {
          color: '#000000',
          opacity: 0.2,
          borderColor: '#fff',
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
    grid: [
      {
        top: '18%',
        left: '15',
        right: '15',
        height: '35%',
      },
      {
        left: '15',
        right: '15',
        top: '55%',
        height: '35%',
      },
    ],
  }
}
