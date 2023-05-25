import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta: Meta<typeof Pagination> = {
  title: 'UI/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Primary: Story = {
  args: {
    current: 20,
    total: 400,
    pageSize: 10,
    urlRender: (page) => `/test?page=${page}`,
  },
}
