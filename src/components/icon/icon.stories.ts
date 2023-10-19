import { Meta, StoryObj } from "@storybook/web-components";

import "./icon";

const meta: Meta = {
  component: "pfreundt-icon",
  argTypes: {
    iconName: { type: "string" },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    iconName: "home",
  },
};
