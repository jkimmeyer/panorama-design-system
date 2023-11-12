import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each variants}}
  Button{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";

const meta: Meta = {
  component: "{{meta.prefix}}-button",
  argTypes: {
    {{> storybookVariantControls}}
    {{> storybookControls}}
  },
};

export default meta;

export const Default: StoryObj = {
  args: {
    {{> storybookArgs }}
  }
};
