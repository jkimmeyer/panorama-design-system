import { Meta, Story as StoryObj } from "@storybook/web-components";

import "./icon";

const meta: Meta = {
  component: "pfreundt-icon",
  argTypes: {
    iconName: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    iconName: "home",
  },
};
