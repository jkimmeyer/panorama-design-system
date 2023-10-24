import { AddActionConfig, NodePlopAPI } from "@crutchcorn/plop";
import { designSystem } from "./design-system";
import { singularize, applyColor } from "./plop-helper/index";
import { pascalCase } from "change-case";

const mergeToTitleCase = (terms: string[]) => {
  return pascalCase(terms.join(" "));
};

const COMPONENTS = ["button", "card", "material-icon"];

interface Attributes {
  [key: string]: string[];
}

interface Data {
  component: string;
}
interface Meta {
  component: string;
  componentName: string;
  attributes: Attributes;
}

export default function (plop: NodePlopAPI) {
  // eslint-disable-next-line
  // @ts-ignore
  plop.setPartial("dataAttrPartial", (attributes: Attributes): string => {
    return Object.keys(attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);
        return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
      })
      .join(" ");
  });

  // eslint-disable-next-line
  // @ts-ignore
  plop.setPartial("propertiesPartial", (meta: Meta) => {
    const propertiesString = Object.keys(meta.attributes).map((attribute) => {
      const singularizedAttribute = singularize(attribute);
      const attributeType = mergeToTitleCase([
        meta.componentName,
        singularizedAttribute,
      ]);
      const propertyDefinition = `@property({ type: String })`;
      const defaultDefinition = `${singularizedAttribute}: ${attributeType} = ${attributeType}.${pascalCase(
        meta.attributes[attribute][0],
      )}`;
      return [propertyDefinition, defaultDefinition].join("\n");
    });

    return propertiesString.join("\n\n");
  });

  // eslint-disable-next-line
  // @ts-ignore
  plop.setPartial("typesPartial", (meta) => {
    const attributeTypes = Object.keys(meta.attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);

        const typeDefinition = `export enum ${pascalCase(
          meta.componentName,
        )}${pascalCase(singularizedAttribute)} {`;

        const types = meta.attributes[attribute]
          .map((value: string) => `  ${pascalCase(value)} = "${value}"`)
          .join(",\n");

        const typeClosing = "}";
        return [typeDefinition, types, typeClosing].join("\n");
      })
      .join("\n\n");

    return attributeTypes;
  });

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

      components.forEach((component: string) => {
        actions.push({
          type: "add",
          path: `src/components/${component}/component.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.ts`,
        });

        actions.push({
          type: "add",
          path: `src/components/${component}/component.stories.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.stories.ts`,
        });

        actions.push({
          type: "add",
          path: `src/components/${component}/component.test.ts`,
          data: { designSystem, componentName: component },
          templateFile: `plop-templates/${component}/component.test.ts`,
        });
      });

      return actions;
    },
  });
}
