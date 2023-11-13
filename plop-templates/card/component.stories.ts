import type { StoryObj, Meta } from "@storybook/web-components";

import {
  {{#each variants}}
  Card{{ singularize (titleCase @key) }},
  {{/each}}
} from "./component";
import "./component";

const meta: Meta = {
  component: "{{meta.prefix}}-card",
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
