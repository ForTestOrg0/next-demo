import type { Meta, StoryObj } from "@storybook/react";

import { Loading } from ".";
import { useState } from "react";
import type { Size } from "./Loading";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Loading> = {
  title: "UI/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Loading>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {},
};

const Demo = () => {
  const [size, setSize] = useState<Size>("middle");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <div className="flex items-center justify-center gap-2 w-fit">
        <button className="border rounded px-2" onClick={() => setIsLoading((pre) => !pre)}>
          Trigger
        </button>
        <div>|</div>
        {["small", "middle", "large"].map((item) => (
          <button key={item} className="border rounded px-2 capitalize" onClick={() => setSize(item as Size)}>
            {item}
          </button>
        ))}
      </div>
      <Loading loading={isLoading} size={size} className="mt-4">
        <div className="border w-fit p-2 rounded">
          <h3>Hey</h3>
          <p>Good morning! ^_^</p>
        </div>
      </Loading>
    </>
  );
};

export const Secondary: Story = {
  render: () => <Demo />,
};
