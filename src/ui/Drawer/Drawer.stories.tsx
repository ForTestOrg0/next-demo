import type { Meta, StoryObj } from "@storybook/react";

import { Drawer } from ".";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerWithHooks = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <>
      <button onClick={() => setIsShowing(true)} className="rounded border border-sub-network px-2">
        Open Drawer
      </button>
      <Drawer show={isShowing} title="Title" onClose={() => setIsShowing(false)} maskClosable>
        <div>
          <p>GM</p>
          <span>Frens</span>
        </div>
      </Drawer>
    </>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => <DrawerWithHooks />,
};
