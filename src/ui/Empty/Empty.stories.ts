import type { Meta, StoryObj } from '@storybook/react'

import { Empty } from '.'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Empty> = {
  title: 'UI/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Empty>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    description: 'Oops, no data',
  },
}
