import type { StoryObj, Meta } from "@storybook/web-components";
import { CheckboxSize } from "./component";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel B/Components/Checkbox",
  component: "pano-b-checkbox",
  argTypes: {
    size: {
      options: CheckboxSize,
      control: { type: "select" },
    },
    checked: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    hiddenLabel: {
      type: "boolean",
    },
    indeterminate: {
      type: "boolean",
    },
    label: {
      type: "string",
    },
    name: {
      type: "string",
    },
    value: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    size: "small",
    checked: false,
    disabled: false,
    hiddenLabel: false,
    indeterminate: false,
    label: "Checkbox Label",
    name: undefined,
    value: undefined,
  },
};
