import type { ECharts } from 'echarts'
import React, { PureComponent } from 'react'
import { EChartsReactProps, EChartsInstance } from './types'

export default class EChartsReactCore extends PureComponent<EChartsReactProps> {
  public ele: any
  protected echarts: any

  constructor(props: EChartsReactProps) {
    super(props)

    this.echarts = props.echarts
    this.ele = React.createRef()
  }

  componentDidMount() {
    this.renderNewEcharts()
  }

  componentDidUpdate() {
    this.updateEChartsOption()
  }

  componentWillUnmount() {
    this.dispose()
  }

  public async initEchartsInstance(): Promise<ECharts> {
    return new Promise((resolve) => {
      this.echarts.init(this.ele.current, null, this.props.opts)
      const echartsInstance = this.getEchartsInstance()
      echartsInstance.on('finished', () => {
        resolve(echartsInstance)
      })
    })
  }

  public getEchartsInstance(): ECharts {
    return this.echarts.getInstanceByDom(this.ele.current)
  }

  private dispose() {
    this.echarts?.dispose(this.getEchartsInstance())
  }

  private async renderNewEcharts() {
    await this.initEchartsInstance()
    const echartsInstance = this.updateEChartsOption()
  }

  private updateEChartsOption(): EChartsInstance {
    const { option } = this.props
    const echartInstance = this.getEchartsInstance()
    echartInstance.setOption(option)

    return echartInstance
  }

  render() {
    const { style, className = '' } = this.props

    return <div ref={this.ele} style={style} className={`react-echarts ${className}`} />
  }
}
