import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each variants}}
  Button{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{meta.prefix}}-button",
  argTypes: {
    {{#each variants}}
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
  {{#each variants}}
    {{singularize @key }}: "{{lookup this 0}}",
  {{/each}}
    label: "Button",
    disabled: false,
    href: undefined,
    buttonType: "button"
  }
};
