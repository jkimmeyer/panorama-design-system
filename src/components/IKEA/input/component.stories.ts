import type { StoryObj, Meta } from "@storybook/web-components";
import {
  InputSize,
} from "./component";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel IKEA/Components/Input",
  component: "ikea-input",
  argTypes: {
    size: {
      options: InputSize,
      control: { type: "select" }
    },    disabled: {
      type: "boolean"
    },
    hiddenLabel: {
      type: "boolean"
    },
    inputType: {
      type: "string"
    },
    label: {
      type: "string"
    },
    readOnly: {
      type: "boolean"
    },
    required: {
      type: "boolean"
    },
    pattern: {
      type: "string"
    },
    placeholder: {
      type: "string"
    },
    value: {
      type: "string"
    },
    iconBefore: {
      type: "string"
    },
    iconAfter: {
      type: "string"
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    size: "small",
    disabled: false,
    hiddenLabel: false,
    inputType: "text",
    label: "Input Label",
    readOnly: false,
    required: false,
  }
};
