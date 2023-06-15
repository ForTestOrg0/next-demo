import type { Meta, StoryObj } from '@storybook/react'

import { Legend01 } from './Legend01'

const meta: Meta<typeof Legend01> = {
  title: 'Component/Legend01',
  component: Legend01,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Legend01>

export const Primary: Story = {
  args: {
    title: 'Validator Stake',
    value: '34,387k (73.8%)',
    colorCls: 'bg-sub-network',
    children: 'Text',
  },
}

export const Primary01: Story = {
  args: {
    title: 'Validator Stake',
    value: '34,387k (73.8%)',
    colorCls: 'bg-[#FF99CD]',
    children: 'Text',
  },
}
