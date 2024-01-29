import type { StoryObj, Meta } from "@storybook/web-components";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel IKEA/Components/RadioGroup",
  component: "ikea-radio-group",
  argTypes: {
    name: {
      type: "string",
    },
    label: {
      type: "string",
    },
    options: {
      control: "Array",
    },
    disabled: {
      type: "boolean",
    },
    hiddenLabel: {
      type: "boolean",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    name: "radio-group-1",
    label: "Radio Group Label",
    options: [{ "option 1": "Option 1" }, { "option 2": "Option 2" }],
    disabled: false,
    hiddenLabel: false,
  },
};
