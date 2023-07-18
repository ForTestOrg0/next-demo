import dayjs from 'dayjs'
import _ from 'lodash'
import { EChartsOption, DatasetComponentOption } from 'echarts'
import { abbreviateNumber } from '@/utils/bigNumber'

/**
 * Returns an EChartsOption object for an area chart given a dataset.
 *
 * @param {Object} options - Optional parameters for the chart.
 * @param {EChartsOption['dataset']} options.dataset - The dataset for the chart.
 * @return {EChartsOption} An EChartsOption object for an area chart.
 */
export const stackLineChartOption = ({ dataset }: { dataset?: EChartsOption['dataset'] }): EChartsOption => {
  const startValue = dayjs().subtract(3, 'M').format('YYYY-MM-DD')
  return {
    dataset,
    tooltip: {
      trigger: 'axis',
      formatter(params: any) {
        let source: any = (dataset as DatasetComponentOption).source
        const param = params && params[0]
        let content = ''
        content +=
          '<div class="section" style="margin:4px 0;">' +
          '<span style="display:inline-block;margin-right:14px;">' +
          '</span>' +
          '<span style="font-weight:900">' +
          'Total' +
          '</span>' +
          '<span style="float:right;display:inline-block;margin-left:20px;font-weight:900">' +
          abbreviateNumber(source[param.dataIndex][4], 3) +
          '</span>' +
          '</div>'
        _.forEach(params, (param, idx) => {
          if (param.data === '0') {
            return
          }
          content +=
            "<div class='section'>" +
            param.marker +
            '<span style="font-weight:900">' +
            param.seriesName +
            '</span>' +
            '<span style="float:right;display:inline-block;margin-left:20px;font-weight:900">' +
            abbreviateNumber(param.data[idx + 1], 3) +
            '</span>' +
            '</div>'
        })
        return "<div class='tooltip-wrapper'>" + "<div class='time'>" + param.axisValueLabel + '</div>' + content + '</div>'
      },
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
        type: 'line',
        name: 'Circulating',
        areaStyle: {},
        showSymbol: false,
        stack: 'Total',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'line',
        name: 'staking',
        areaStyle: {},
        showSymbol: false,
        stack: 'Total',
        emphasis: {
          disabled: true,
        },
      },
      {
        type: 'line',
        name: 'Others',
        areaStyle: {},
        showSymbol: false,
        stack: 'Total',
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
