import type { StoryObj, Meta } from "@storybook/web-components";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel IKEA/Components/Checkbox",
  component: "ikea-checkbox",
  argTypes: {
    checked: {
      type: "boolean"
    },
    disabled: {
      type: "boolean"
    },
    hiddenLabel: {
      type: "boolean"
    },
    indeterminate: {
      type: "boolean"
    },
    label: {
      type: "string"
    },
    name: {
      type: "string"
    },
    value: {
      type: "string"
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined,
  }
};
