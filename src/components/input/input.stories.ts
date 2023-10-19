import type { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./input";

const meta: Meta = {
  component: "pfreundt-input",
  argTypes: {
    label: { type: "string" },
    value: { type: "string" },
    name: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Label",
  },
};
