import {
  AddActionConfig,
  ModifyActionConfig,
  NodePlopAPI,
} from "@crutchcorn/plop";
import { designSystem } from "./design-system";
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

const COMPONENTS = Object.keys(designSystem.components);

interface Data {
  component: string;
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
        choices: ["all", ...COMPONENTS],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    // eslint-disable-next-line
    // @ts-ignore
    actions: (data: Data) => {
      const addActions: AddActionConfig[] = [];
      const modifyActions: ModifyActionConfig[] = [];
      let components;

      if (data.component === "all") components = [...COMPONENTS];
      else components = [data?.component];

      components.forEach((name: string) => {
        const { variants, properties } = designSystem.components[name];
        const meta = designSystem.meta;

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${name}/component.styles.ts`,
          data: { variants, name, meta },
          templateFile: `plop-templates/${name}/component.styles.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${name}/component.ts`,
          data: { variants, properties, name, meta },
          templateFile: `plop-templates/${name}/component.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${name}/component.stories.ts`,
          data: { variants, properties, name, meta },
          templateFile: `plop-templates/${name}/component.stories.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${name}/component.test.ts`,
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
          data: { name: component },
          transform: appendImports,
        });
      });

      return [...addActions, ...modifyActions];
    },
  });
}
