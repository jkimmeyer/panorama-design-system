import type { StoryObj, Meta } from "@storybook/web-components";
import { CardVariant } from "./Card";

const meta: Meta = {
  component: "ds-card",
  argTypes: {
    variant: {
      options: CardVariant,
      control: { type: "select" },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
