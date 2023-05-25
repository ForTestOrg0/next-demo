import type { Meta, StoryObj } from '@storybook/react'

import { notification } from '.'
import { useRef } from 'react'

interface Props {
  title?: string
  description: JSX.Element | string
  duration?: number
}

const methods = ['success', 'error', 'warn', 'progress'] as const

const Demo = ({ title, description, duration }: Props) => {
  const ref = useRef<(() => void)[]>([])
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => {
          ref.current.forEach((closer) => closer())
          ref.current = []
        }}
        className="border rounded px-2">
        Close All
      </button>
      <div>|</div>
      {methods.map((method, index) => (
        <button
          key={index}
          onClick={() => {
            const closer = notification[method]({
              title,
              description,
              duration,
            })
            ref.current.push(closer)
          }}
          className="border rounded px-2 capitalize">
          {method}
        </button>
      ))}
    </div>
  )
}

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Demo> = {
  title: 'UI/notification',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Demo>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'This is Title',
    description: 'This is Description',
    duration: 3000,
  },
}
