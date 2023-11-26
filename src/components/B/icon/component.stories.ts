import type { StoryObj, Meta } from "@storybook/web-components";

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel B/Components/Icon",
  component: "pano-b-icon",
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
