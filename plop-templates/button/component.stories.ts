import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each designSystem.components.button}}
  Button{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{designSystem.prefix}}-button",
  argTypes: {
    {{#each designSystem.components.button}}
    {{singularize @key}}: {
      options: Button{{ singularize (titleCase @key) }},
      control: { type: "select" },
    },
    {{/each}}
    label: { type: "string" },
    disabled: { type: "boolean" },
    href: { type: "string" },
    buttonType: { type: "string" },
    iconBefore: { type: "string" },
    iconAfter: { type: "string" },
    iconOnly: { type: "boolean" },
  },
};

  export default meta;

export const Default: StoryObj = {
  args: {
  {{#each designSystem.components.button}}
    {{singularize @key }}: "{{lookup this 0}}",
  {{/each}}
    label: "Button",
    disabled: false,
    href: undefined,
    buttonType: "button"
  }
};
