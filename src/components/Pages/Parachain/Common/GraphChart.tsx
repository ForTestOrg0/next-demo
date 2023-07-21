import React, { useState, useMemo, useRef, useCallback } from 'react'
import _ from 'lodash'
import clsx from 'clsx'
import { Flex, Text } from '@/ui'
import BigNumber from 'bignumber.js'
import { BareProps, BareServerSideProps } from '@/types/page'
import { DEFAULT_PARACHAIN, getParachainProjectInfoById } from '@/config/parachains'
import { getRelaySubdomainFromSubdomain, getChainConfigByParachainId, getChainConfigBySubdomain } from '@/config/chains'
import EChartsReact, { EChartsInstance } from '@/components/Echart'
import style from './GraphChart.module.scss'
import dayjs from 'dayjs'
import { UpLeftAndDownRightFromCenterIcon, DownRightAndUpLeftToCenterIcon } from '@/ui/Svg'
import { unwrap, useXCMChannels } from '@/utils/api'
import { Loading } from '@/components/Loading'
import { Empty } from '@/components/Empty'
type ParachainContentType = {
  paraId: string | number
  logo: any
  color: string | undefined
  name: string | undefined
  url?: string
}
type LinkType = {
  source: string
  target: string
  lineStyle?: {
    width: number
    color: string
    opacity: number
    curveness: number
  }
}
type NodeType = {
  id: string
  name: string | undefined
  category: number
  symbolSize: number
}
type CategoryType = {
  itemStyle: {
    color: string | undefined
  }
}
type UseXCMChannelsParams = Parameters<typeof useXCMChannels>[1]
interface Props extends BareProps, BareServerSideProps {
  host: string
}

export const GraphChart: React.FC<Props> = ({ children, host, chain, className }) => {
  const [scale, setScale] = useState(false)
  const [hightlightList, setHightlightList] = useState<string[]>([])
  const [running, setRunning] = useState(true)
  let echartRef: EChartsInstance = useRef(null)
  const { data, error, isLoading } = useXCMChannels(host, {})
  const XCMChannels = unwrap(data)
  const maxNodesShow = 35
  const lastSwapIndex = 12
  const relaySubdomain = getRelaySubdomainFromSubdomain(host)
  const relayChainConf = getChainConfigBySubdomain(relaySubdomain)
  const isRelayChain = relaySubdomain === host
  const getParachainById = (paraId: number) => {
    let result: ParachainContentType = {} as ParachainContentType
    const parachainInfo = {
      ...getChainConfigByParachainId(paraId, relaySubdomain as RelaychainName),
      ...(getParachainProjectInfoById(relaySubdomain as RelaychainName, +paraId) || DEFAULT_PARACHAIN),
    }
    if (parachainInfo.logo) {
      result = {
        paraId: paraId,
        logo: parachainInfo.logo,
        color: parachainInfo.theme?.['colors'][0],
        name: parachainInfo.name,
        url: parachainInfo.domain,
      }
    } else if (parachainInfo.ParaID) {
      result = {
        paraId: paraId,
        logo: '',
        // logo: parachainInfo.Logo,
        // name: parachainInfo['Project Name'],
        name: '',
        color: relayChainConf?.theme.colors[0],
      }
    }
    if (!result.name) {
      result = {
        paraId: paraId,
        logo: '',
        name: '' + paraId,
        color: relayChainConf?.theme.colors[0],
      }
    }
    return result
  }
  const graphData = useMemo(() => {
    let parasInfo: ParachainContentType[] = []
    if (XCMChannels?.list) {
      let successChannels = _.filter(XCMChannels.list, (item) => {
        return item.status === 'accepted'
      })
      let paras: number[] = []
      let nodes: NodeType[] = []
      let tempLinks: string[] = []
      let reverseLink: LinkType[] = []
      let links: LinkType[] = []
      let categories: CategoryType[] = []
      _.forEach(successChannels, (channel) => {
        paras.push(channel.sender)
        paras.push(channel.recipient)
        if (channel.sender < channel.recipient) {
          tempLinks.push(channel.sender + '-' + channel.recipient)
        } else {
          reverseLink.push({
            source: '' + channel.sender,
            target: '' + channel.recipient,
          })
        }
      })
      let curveness = 0.5
      _.forEach(reverseLink, (link) => {
        let reverse = link.target + '-' + link.source
        if (tempLinks.indexOf(reverse) > -1) {
          tempLinks.push(link.source + '-' + link.target + '-' + curveness)
        } else {
          tempLinks.push(link.source + '-' + link.target)
        }
      })
      _.forEach(tempLinks, (link) => {
        let arr = link.split('-')
        if (arr[2]) {
          links.push({
            source: arr[0],
            target: arr[1],
            lineStyle: {
              width: 0.5,
              color: 'source',
              opacity: 0.5,
              curveness: +arr[2],
            },
          })
        } else {
          links.push({
            source: arr[0],
            target: arr[1],
          })
        }
      })
      let uniqueNodes = _.uniq(paras)
      _.forEach(uniqueNodes, (node, index) => {
        let paraInfo = getParachainById(node)
        parasInfo.push(paraInfo)
        nodes.push({
          id: '' + node,
          name: paraInfo.name,
          category: index,
          symbolSize: 0,
        })
        categories.push({
          itemStyle: {
            color: paraInfo.color,
          },
        })
      })
      return {
        graph: { nodes: nodes.slice(0, maxNodesShow), links, categories: categories.slice(0, maxNodesShow) },
        queue: { nodes: nodes.slice(maxNodesShow), categories: categories.slice(maxNodesShow), swapIndex: 0 },
        parasInfo,
      }
    }
    return {
      graph: { nodes: [], links: [], categories: [] },
      queue: { nodes: [], categories: [], swapIndex: 0 },
      parasInfo,
    }
  }, [XCMChannels, getParachainById])
  if (isLoading) return <Loading />
  if (!XCMChannels) return <Empty />
  const getGraphBg = () => {
    let result = '/website/assets/xcm/bg-polkadot.svg'
    switch (chain.chainConf.id) {
      case 'kusama':
        result = '/website/assets/xcm/bg-kusama.svg'
        break
      case 'rococo':
        result = '/website/assets/xcm/bg-rococo.svg'
        break
      default:
        result = '/website/assets/xcm/bg-polkadot.svg'
        break
    }
    return result
  }
  const getGraphDots = () => {
    let result = '/website/assets/xcm/graph-dots-polkadot.svg'
    switch (chain.chainConf.id) {
      case 'kusama':
        result = '/website/assets/xcm/graph-dots-kusama.svg'
        break
      case 'rococo':
        result = '/website/assets/xcm/graph-dots-rococo.svg'
        break
      default:
        result = '/website/assets/xcm/graph-dots-polkadot.svg'
        break
    }
    return result
  }
  const findListById = (id: string) => {
    let result = [id]
    _.forEach(graphData.graph.links, (link) => {
      if (link.source === id) {
        result.push(link.target)
      } else if (link.target === id) {
        result.push(link.source)
      }
    })
    setHightlightList(result)
  }
  const setInitialHighlight = () => {
    if (isRelayChain) {
      setHightlightList([])
    } else {
      // findListById('' + this.paraId);
      // _.forEach(this.parasInfo, (info) => {
      //   if (info.paraId === this.paraId) {
      //     let myChart = echartRef.current?.getEchartsInstance()
      //     myChart?.dispatchAction({
      //       type: 'highlight',
      //       name: info.name,
      //     })
      //     return false
      //   }
      // })
    }
  }
  const highlightSymbol = (item: NodeType) => {
    let myChart = echartRef.current?.getEchartsInstance()
    findListById(item.id)
    myChart?.dispatchAction({
      type: 'highlight',
      name: item.name,
    })
  }
  const downplaySymbol = (item: NodeType) => {
    let myChart = echartRef.current?.getEchartsInstance()
    myChart?.dispatchAction({
      type: 'downplay',
      name: item.name,
    })
    setInitialHighlight()
  }

  const getParaInfoById = (paraId: string | undefined) => {
    return graphData.parasInfo.find((item) => paraId && +item.paraId === +paraId)
  }
  const getImgStyle = (dataIndex: number) => {
    let count = graphData.graph.nodes && graphData.graph.nodes.length
    let imgW = 30
    let imgH = 58
    let padding = 38
    let cx = 210 - imgW / 2
    let cy = 210 - imgH / 2
    let r = 110 + padding
    let rad = 360 / count / 2 + 0
    let angle = -rad - (360 / count) * dataIndex
    let radian = (angle * Math.PI) / 180
    let left = r * Math.cos(radian) + cx
    let bottom = r * Math.sin(radian) + cy
    let rotateAngle = 90 - angle
    return {
      transform: 'rotate(' + rotateAngle + 'deg)',
      left: left + 'px',
      bottom: bottom + 'px',
      color: 'red',
      fontSize: '13px',
    }
  }
  return (
    <Flex className={clsx('relative overflow-hidden w-full h-full justify-center items-center', style.chartWrapper)}>
      <div className={clsx('relative p-[70px] w-[420px] h-[420px] overflow-hidden rounded-[50%]', style.graphWrapper, scale ? style.scale : '')}>
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none">
          <img
            src={getGraphBg()}
            alt={chain.chainConf.id}
            className={clsx('absolute w-[420px] h-[420px]', running ? style.runingReverse : '', style.graphBg)}
          />
          <div className={clsx('absolute top-0 left-0 right-0 bottom-0', style.waveLoading)}>
            <div className={clsx('absolute', style.wave)}></div>
            <div className={clsx('absolute', style.wave, style.delay1)}></div>
            <div className={clsx('absolute', style.wave, style.delay2)}></div>
          </div>
        </div>
        <EChartsReact
          ref={echartRef}
          className={clsx('w-full h-full', running ? style.running : '', style.chartContent)}
          option={{
            edgeSymbol: ['circle', 'arrow'],
            edgesymbolSize: 0,
            itemStyle: {},
            // autoCurveness: true,
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
              {
                name: '',
                type: 'graph',
                layout: 'circular',
                circular: {
                  rotateLabel: true,
                },
                data: graphData.graph.nodes,
                links: graphData.graph.links,
                categories: graphData.graph.categories,
                // roam: true,
                label: {
                  show: false,
                  position: 'right',
                  formatter: '',
                },
                lineStyle: {
                  width: 0.5,
                  color: 'source',
                  opacity: 0.5,
                  curveness: 0.3,
                },
                emphasis: {
                  focus: 'adjacency',
                },
              },
            ],
          }}
        />
        <div className={clsx('absolute top-0 left-0 right-0 bottom-0 rounded-[50%]', running ? style.running : '', style.absoluteContent)}>
          {graphData.graph.nodes.map((item, index) => {
            return (
              <Flex className="absolute w-[30px] flex-col" key={item.id} style={getImgStyle(index)}>
                <span className="relative w-[30px] h-[30px] flex items-center justify-center rounded-[50%] text-[0px] cursor-pointer">
                  {getParaInfoById(item.id)?.logo ? (
                    <img
                      onMouseEnter={() => {
                        highlightSymbol(item)
                      }}
                      onMouseLeave={() => {
                        downplaySymbol(item)
                      }}
                      className={clsx(
                        'rounded-[50%]',
                        style.paraLogo,
                        hightlightList.length > 0 && hightlightList.indexOf(item.id) === -1 ? style.blur : ''
                      )}
                      src={getParaInfoById(item.id)?.logo?.default?.src}
                      alt={item.name}
                    />
                  ) : (
                    <Flex
                      className={clsx(
                        'rounded-[50%] relative w-[30px] h-[30px] items-center justify-center text-white font-semibold',
                        hightlightList.length > 0 && hightlightList.indexOf(item.id) === -1 ? style.blur : '',
                        style.paraLogo
                      )}
                      onMouseEnter={() => {
                        highlightSymbol(item)
                      }}
                      onMouseLeave={() => {
                        downplaySymbol(item)
                      }}
                      style={{ background: `${getParaInfoById(item.id)?.color}` }}>
                      <span className="text-xs">{item.name}</span>
                    </Flex>
                  )}
                </span>
                <img src={getGraphDots()} className="relative w-[14px] mx-2" />
              </Flex>
            )
          })}
          <img
            className={clsx('absolute w-[60px] bottom-[180px] left-[180px]', running ? style.runingReverse : '', style.centerLogo)}
            src={'/website/assets/polkadot.png'}
          />
        </div>
      </div>
      <div className="absolute top-[50px] right-[88px]">
        {scale ? (
          <DownRightAndUpLeftToCenterIcon
            onClick={() => setScale(false)}
            className="w-6  cursor-pointer text-sub-network/50"></DownRightAndUpLeftToCenterIcon>
        ) : (
          <UpLeftAndDownRightFromCenterIcon
            className="w-6  cursor-pointer text-sub-network/50"
            onClick={() => setScale(true)}></UpLeftAndDownRightFromCenterIcon>
        )}
      </div>
    </Flex>
  )
}
