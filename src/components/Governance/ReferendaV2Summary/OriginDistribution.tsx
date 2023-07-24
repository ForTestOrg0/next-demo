import React from 'react'
import clsx from 'clsx'
import { BareProps, BareServerSideProps } from '@/types/page'
import { FellowshipStatistics, ReferendaStatistics } from '@/types/api'
import EChartsReact from '@/components/Echart'
import { pieWithLegendChartOption } from '@/components/Echart/chartOptions'
import { toBigCamel } from '@/utils/formatText'

interface Props extends BareProps, BareServerSideProps {
  statistics: FellowshipStatistics | ReferendaStatistics
}

const Component: React.FC<Props> = ({ children, className, statistics, chain }) => {
  return (
    <div className={clsx('flex flex-1', className)}>
      <EChartsReact
        className="w-full h-full"
        option={{
          ...pieWithLegendChartOption({
            dataset: {
              source:
                statistics?.origins?.map((origin) => {
                  return [toBigCamel(origin.Origins), origin.Count]
                }) || [],
            },
          }),
        }}
      />
    </div>
  )
}

export default Component
