import type { StoryObj, Meta } from "@storybook/web-components";
import { ButtonVariant } from "./Button";

const meta: Meta = {
  component: "ds-button",
  argTypes: {
    variant: {
      options: ButtonVariant,
      control: { type: "select" },
    },
    label: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
