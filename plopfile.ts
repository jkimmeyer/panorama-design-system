import {
  AddActionConfig,
  ModifyActionConfig,
  NodePlopAPI,
} from "@crutchcorn/plop";
import { paramCase } from "change-case";
import { designSystem } from "./design-system";
import {
  singularize,
  applyColor,
  typesPartial,
  propertiesPartial,
  dataAttributes,
} from "./plop-helper";

// Setup
// const PREFIX = designSystem.prefix;
const COMPONENTS = Object.keys(designSystem.components);

interface Data {
  component: string;
}

interface AnyCaseName {
  name: string;
}

const appendImports = (
  fileContents: string,
  { name: anyCaseName }: AnyCaseName,
) => {
  const lines = fileContents.split("\n").filter(Boolean);
  const componentImport = `import "@/components/${paramCase(
    anyCaseName,
  )}/component";`;
  lines.push(componentImport);
  lines.sort();
  return [...new Set(lines)].join("\n");
};

// Generator
export default function (plop: NodePlopAPI) {
  // Plop does not allow callback function for partials.
  /* eslint-disable @typescript-eslint/ban-ts-comment */
  // @ts-ignore
  plop.setPartial("dataAttributes", dataAttributes);
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
      const addActions: AddActionConfig[] = [];
      const modifyActions: ModifyActionConfig[] = [];
      let components;

      if (data.component === "all") components = [...COMPONENTS];
      else components = [data?.component];

      components.forEach((component: string) => {
        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.styles.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.styles.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.stories.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.stories.ts`,
        });

        addActions.push({
          force: true,
          type: "add",
          path: `src/components/${component}/component.test.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.test.ts`,
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
