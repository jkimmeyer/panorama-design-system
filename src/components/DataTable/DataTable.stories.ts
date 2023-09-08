import type { StoryObj, Meta } from "@storybook/web-components";

const meta: Meta = {
  component: "pfreundt-data-table",
  argTypes: {
    content: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {};
