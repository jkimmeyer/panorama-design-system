import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each designSystem.card}}
  Card{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{designSystem.prefix}}-card",
  argTypes: {
    {{#each designSystem.card}}
    {{singularize @key}}: {
      options: Button{{ singularize (titleCase @key) }},
      control: { type: "select" },
    },
    {{/each}}
    href: { type: "string" },
  },
};

export default meta;

type Story = StoryObj;

export const Primary: Story = {};
