import dayjs from 'dayjs'
import { EChartsOption } from 'echarts'
import { abbreviateNumber } from '@/utils/bigNumber'

/**
 * Returns an EChartsOption object for an area chart given a dataset.
 *
 * @param {Object} options - Optional parameters for the chart.
 * @param {EChartsOption['dataset']} options.dataset - The dataset for the chart.
 * @return {EChartsOption} An EChartsOption object for an area chart.
 */
export const stackBarChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  const startValue = dayjs().subtract(3, 'M').format('YYYY-MM-DD')
  return {
    dataset,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      right: '15',
    },
    xAxis: {
      type: 'category',
      show: true,
      boundaryGap: false,
      min: 'dataMin',
      max: 'dataMax',
      axisLine: {
        onZero: false,
        show: true,
        lineStyle: {
          opacity: 0,
          width: 3,
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        showMaxLabel: false,
        formatter(value, index) {
          const date = new Date(value)
          if (index === 0) {
            return ''
          }
          if (date.getFullYear() === new Date().getFullYear()) {
            return dayjs(value).format('MM-DD')
          }
          return value
        },
      },
    },
    yAxis: {
      type: 'value',
      show: true,
      splitLine: {
        show: true,
        lineStyle: {
          width: 1,
          color: '#E7EAF3',
        },
      },
      axisLabel: {
        formatter(value: number) {
          return abbreviateNumber(value, 1)
        },
      },
      axisTick: {
        show: false,
      },
      nameTextStyle: {
        align: 'right',
        padding: [0, 6, 0, 0],
      },
    },
    series: [
      {
        type: 'bar',
        name: 'received',
        stack: 'xcm',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'bar',
        name: 'sent',
        stack: 'xcm',
        emphasis: {
          disabled: true,
        },
      },
    ],
    grid: {
      top: '30',
      left: '50',
      right: '20',
      bottom: '80',
      containLabel: false,
    },
    dataZoom: [
      {
        startValue,
        showDetail: false,
      },
    ],
  }
}
