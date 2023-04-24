import type { Meta, StoryObj } from "@storybook/react";

import { Icons } from "./Icons";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Icons> = {
  title: "UI/SVG",
  component: Icons,
  tags: ["autodocs"],
  argTypes: {
  },
};

export default meta;
type Story = StoryObj<typeof Icons>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: 'h-14 w-14 text-sub-black border'
  },
};