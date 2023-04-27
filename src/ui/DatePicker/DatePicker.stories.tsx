import type { Meta, StoryObj } from "@storybook/react";

import { DatePicker } from ".";
import { useState } from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DatePicker> = {
  title: "UI/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const DatePickerWithHooks = () => {
  const [date, setDate] = useState<Date | null>();
  return <DatePicker value={date} onSelect={setDate} onClear={() => setDate(null)} className="ml-32 w-32" />;
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => <DatePickerWithHooks />,
};
