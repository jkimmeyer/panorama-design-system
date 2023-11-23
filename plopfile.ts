import {
  AddActionConfig,
  ModifyActionConfig,
  NodePlopAPI,
} from "@crutchcorn/plop";
import { designSystemA } from "./design-system-a";
import { designSystemB } from "./design-system-b";

import {
  appendImports,
  singularize,
  applyColor,
  types,
  properties,
  dataAttributes,
  storybookControls,
  storybookArgs,
} from "./plop-helper";
import { storybookVariantControls } from "./plop-helper/partials";

const COMPONENTS_A = Object.keys(designSystemA.components);
const COMPONENTS_B = Object.keys(designSystemB.components);

interface Data {
  component: string;
  designSystem: string;
}

// Generator
export default function (plop: NodePlopAPI) {
  // Plop does not allow callback function for partials.
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  plop.setPartial("dataAttributes", dataAttributes);
  // @ts-ignore
  plop.setPartial("properties", properties);
  // @ts-ignore
  plop.setPartial("types", types);
  // @ts-ignore
  plop.setPartial("storybookControls", storybookControls);
  // @ts-ignore
  plop.setPartial("storybookVariantControls", storybookVariantControls);
  // @ts-ignore
  plop.setPartial("storybookArgs", storybookArgs);
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  plop.setHelper("singularize", singularize);
  plop.setHelper("applyColor", applyColor);

  plop.setGenerator("component", {
    description:
      "Create a base component based on your design system configuration",
    prompts: [
      {
        type: "list",
        choices: ["A", "B"],
        message: "Choose a design system",
        name: "designSystem",
      },
      {
        type: "list",
        choices: ["all", ...COMPONENTS_A, ...COMPONENTS_B],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    // eslint-disable-next-line
    // @ts-ignore
    actions: (data: Data) => {
      const COMPONENTS =
        data.designSystem === "A" ? COMPONENTS_A : COMPONENTS_B;
      const addActions: AddActionConfig[] = [];
      const modifyActions: ModifyActionConfig[] = [];
      let components;
      const DESIGN_SYSTEM =
        data.designSystem === "A" ? designSystemA : designSystemB;

      if (data.component === "all") components = [...COMPONENTS];
      else components = [data?.component];

      components.forEach((name: string) => {
        const { variants, properties } = DESIGN_SYSTEM.components[name];
        const meta = DESIGN_SYSTEM.meta;

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${data.designSystem}/${name}/component.styles.ts`,
          data: { variants, name, meta },
          templateFile: `plop-templates/${name}/component.styles.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${data.designSystem}/${name}/component.ts`,
          data: { variants, properties, name, meta },
          templateFile: `plop-templates/${name}/component.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${data.designSystem}/${name}/component.stories.ts`,
          data: { variants, properties, name, meta },
          templateFile: `plop-templates/component.stories.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${data.designSystem}/${name}/component.test.ts`,
          data: { variants, name, meta },
          templateFile: `plop-templates/${name}/component.test.ts`,
        });
      });

      components.forEach((component: string) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        modifyActions.push({
          force: true,
          type: "modify",
          path: "src/main.ts",
          data: { name: component, designSystem: data.designSystem },
          transform: appendImports,
        });
      });

      return [...addActions, ...modifyActions];
    },
  });
}
