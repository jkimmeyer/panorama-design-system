import {
  AddActionConfig,
  ModifyActionConfig,
  NodePlopAPI,
} from "@crutchcorn/plop";
import { designSystemA } from "./design-systems/a/design-system";
import { designSystemB } from "./design-systems/b/design-system";
import { designSystemIkea } from "./design-systems/ikea/design-system";
import { designSystemZweitag } from "./design-systems/zweitag/design-system";
import { designSystemHsd } from "./design-systems/hsd/design-system";

import {
  appendImports,
  singularize,
  applyColor,
  types,
  properties,
  dataAttributes,
  storybookControls,
  storybookArgs,
  storybookVariantControls,
  testAttributes,
  testDefaults,
  testProps,
  variantTests,
} from "./plop-helper";

const getComponents = (designSystem: DesignSystemsType) => {
  switch (designSystem) {
    case "A":
      return Object.keys(designSystemA.components);
    case "B":
      return Object.keys(designSystemB.components);
    case "IKEA":
      return Object.keys(designSystemIkea.components);
    case "ZWEITAG":
      return Object.keys(designSystemZweitag.components);
    case "HSD":
      return Object.keys(designSystemHsd.components);
    default:
      return [];
  }
};

const getDesignSystem = (designSystem: DesignSystemsType) => {
  switch (designSystem) {
    case "A":
      return designSystemA;
    case "B":
      return designSystemB;
    case "IKEA":
      return designSystemIkea;
    case "ZWEITAG":
      return designSystemZweitag;
    case "HSD":
      return designSystemHsd;
    default:
      return {};
  }
};

const DESIGN_SYSTEMS = ["A", "B", "IKEA", "ZWEITAG", "HSD"];
type DesignSystemsType = (typeof DESIGN_SYSTEMS)[number];

const COMPONENTS_A = Object.keys(designSystemA.components);
const COMPONENTS_B = Object.keys(designSystemB.components);
const COMPONENTS_IKEA = Object.keys(designSystemIkea.components);
const COMPONENTS_ZWEITAG = Object.keys(designSystemZweitag.components);
const COMPONENTS_HSD = Object.keys(designSystemHsd.components);

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
  // @ts-ignore
  plop.setPartial("testProps", testProps);
  // @ts-ignore
  plop.setPartial("testDefaults", testDefaults);
  // @ts-ignore
  plop.setPartial("testAttributes", testAttributes);
  // @ts-ignore
  plop.setPartial("variantTests", variantTests);
  /* eslint-enable @typescript-eslint/ban-ts-comment */

  plop.setHelper("singularize", singularize);
  plop.setHelper("applyColor", applyColor);

  plop.setGenerator("component", {
    description:
      "Create a base component based on your design system configuration",
    prompts: [
      {
        type: "list",
        choices: DESIGN_SYSTEMS,
        message: "Choose a design system",
        name: "designSystem",
      },
      {
        type: "list",
        choices: [
          "all",
          ...COMPONENTS_A,
          ...COMPONENTS_B,
          ...COMPONENTS_IKEA,
          ...COMPONENTS_ZWEITAG,
          ...COMPONENTS_HSD,
        ],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    // eslint-disable-next-line
    // @ts-ignore
    actions: (data: Data) => {
      const COMPONENTS = getComponents(data.designSystem);
      const DESIGN_SYSTEM = getDesignSystem(data.designSystem);

      const addActions: AddActionConfig[] = [];
      const modifyActions: ModifyActionConfig[] = [];
      let components;

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
