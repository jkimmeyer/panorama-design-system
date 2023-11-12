import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each variants}}
  Input{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{meta.prefix}}-input",
  argTypes: {
    {{> storybookArgTypes}}
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    {{> storybookArgs }}
  }
};
