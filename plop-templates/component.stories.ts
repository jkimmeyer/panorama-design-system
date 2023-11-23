import type { StoryObj, Meta } from "@storybook/web-components";
{{#if variants}}
import {
{{#each variants}}
  {{properCase ../name}}{{ singularize (titleCase @key) }},
{{/each}}
} from "./component";
{{/if}}

import "./component";

const meta: Meta = {
  title: "Design System - Beispiel {{designSystem}}/Components/{{properCase name}}",
  component: "{{meta.prefix}}-{{name}}",
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
