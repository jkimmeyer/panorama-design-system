import type { StoryObj, Meta } from "@storybook/web-components";
import {
  ButtonAppearance,
  ButtonSize,
  ButtonTheme,
} from "./component";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel HSD/Components/Button",
  component: "hsd-button",
  argTypes: {
    appearance: {
      options: ButtonAppearance,
      control: { type: "select" }
    },
    size: {
      options: ButtonSize,
      control: { type: "select" }
    },
    theme: {
      options: ButtonTheme,
      control: { type: "select" }
    },    label: {
      type: "string"
    },
    buttonType: {
      type: "string"
    },
    iconOnly: {
      type: "boolean"
    },
    iconBefore: {
      type: "string"
    },
    fullWidth: {
      type: "boolean"
    },
    iconAfter: {
      type: "string"
    },
    href: {
      type: "string"
    },
    disabled: {
      type: "boolean"
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    appearance: "filled",
    size: "small",
    theme: "primary",
    label: "Button",
    buttonType: "button",
    iconOnly: false,
    iconBefore: "",
    fullWidth: false,
    iconAfter: "",
    href: "",
    disabled: false,
  }
};
