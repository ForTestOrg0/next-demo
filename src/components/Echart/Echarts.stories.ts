import type { Meta, StoryObj } from '@storybook/react'

import EChartsReact from './'
import { areaChartOption, pieChartOption } from './chartOptions'

const meta: Meta<typeof EChartsReact> = {
  title: 'Component/Echart',
  component: EChartsReact,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof EChartsReact>

export const Pie: Story = {
  args: {
    style: {
      width: '130px',
      height: '130px',
    },
    option: {
      ...pieChartOption({
        dataset: {
          source: [
            ['2023-01-01', 141.1],
            ['2023-01-02', 86.5],
            ['2023-01-03', 24.1],
          ],
        },
      }),
      color: ['#E90979', '#F081B9', '#d7d7d7'],
    },
  },
}

export const Area: Story = {
  args: {
    style: {
      width: '350px',
      height: '200px',
    },
    option: {
      ...areaChartOption({
        dataset: {
          source: [
            ['2023-01-01', 141.1],
            ['2023-01-02', 86.5],
            ['2023-01-03', 24.1],
          ],
        },
      }),
      color: ['#E90979', '#F081B9', '#d7d7d7'],
    },
  },
}
