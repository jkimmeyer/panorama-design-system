import { AddActionConfig, NodePlopAPI } from "@crutchcorn/plop";
import { designSystem } from "./design-system";
import {
  singularize,
  applyColor,
  typesPartial,
  propertiesPartial,
  dataAttrPartial,
} from "./plop-helper";

// Setup
const PREFIX = designSystem.prefix;
const COMPONENTS = Object.keys(designSystem.components);

interface Data {
  component: string;
}

// Generator
export default function (plop: NodePlopAPI) {
  // Plop does not allow callback function for partials.
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  plop.setPartial("dataAttrPartial", dataAttrPartial);
  // @ts-ignore
  plop.setPartial("propertiesPartial", propertiesPartial);
  // @ts-ignore
  plop.setPartial("typesPartial", typesPartial);
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  plop.setHelper("singularize", singularize);
  plop.setHelper("applyColor", applyColor);

  plop.setGenerator("component", {
    description:
      "Create a base component based on your design system configuration",
    prompts: [
      {
        type: "list",
        choices: ["all", ...COMPONENTS],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    // eslint-disable-next-line
    // @ts-ignore
    actions: (data: Data) => {
      const actions: AddActionConfig[] = [];
      let components;

      if (data.component === "all") components = [...COMPONENTS];
      else components = [data?.component];

      return components.flatMap((component: string) => {
        actions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.ts`,
        });

        actions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.styles.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.styles.ts`,
        });

        actions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.stories.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.stories.ts`,
        });

        actions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.test.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.test.ts`,
        });
      });
    },
  });
}
