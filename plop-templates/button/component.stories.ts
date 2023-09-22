import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each designSystem.button}}
  Button{{titleCase @key}},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{designSystem.prefix}}-button",
  argTypes: {
    {{#each designSystem.button}}
    {{@key}}: {
      options: Button{{titleCase @key}},
      control: { type: "select" },
    },
    {{/each}}
    label: { type: "string" },
    disabled: { type: "boolean" },
    href: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
