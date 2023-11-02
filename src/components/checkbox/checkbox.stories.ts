import type { StoryObj, Meta } from "@storybook/web-components";
import { html } from "lit-html";

import "./checkbox";

const meta: Meta = {
  component: "pfreundt-checkbox",
  argTypes: {
    label: { type: "string" },
    value: { type: "string" },
    name: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: (args) =>
    html`<pfreundt-checkbox
      value="${args.value}"
      name="${args.name}"
      label="${args.label}"
    ></pfreundt-checkbox>`,
  args: {
    label: "Label",
    value: "checked",
    name: "checkbox-group",
  },
};
