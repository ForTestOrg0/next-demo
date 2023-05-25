import type { Meta, StoryObj } from '@storybook/react'

import { message } from '.'
import { useRef } from 'react'

interface Props {
  content: JSX.Element | string
  duration?: number
}

const methods = ['success', 'error', 'warn', 'info'] as const

const Demo = ({ content, duration }: Props) => {
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
            const closer = message[method](content, duration)
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
  title: 'UI/message',
  component: Demo,
  tags: ['autodocs'],
  argTypes: {},
}

export default meta

type Story = StoryObj<typeof Demo>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    content: 'This is Content',
    duration: 3000,
  },
}
