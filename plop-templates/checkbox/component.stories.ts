import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each variants}}
  Checkbox{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";
import "./component";

const meta: Meta = {
  component: "{{meta.prefix}}-checkbox",
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
