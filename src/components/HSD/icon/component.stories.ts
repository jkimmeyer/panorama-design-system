import type { StoryObj, Meta } from "@storybook/web-components";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel HSD/Components/Icon",
  component: "hsd-icon",
  argTypes: {
    iconName: {
      type: "string",
    },
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    iconName: "home",
  },
};
