import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each designSystem.button}}
  Button{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{designSystem.prefix}}-button",
  argTypes: {
    {{#each designSystem.button}}
    {{singularize @key}}: {
      options: Button{{ singularize (titleCase @key) }},
      control: { type: "select" },
    },
    {{/each}}
    label: { type: "string" },
    disabled: { type: "boolean" },
    href: { type: "string" },
  },
};

export default meta;

export const Primary: StoryObj = {};
