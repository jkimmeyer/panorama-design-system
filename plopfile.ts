import { NodePlopAPI } from "@crutchcorn/plop";
import { designSystem } from "./design-system";
import { singularize, applyColor } from "./plop-helper/index";
import { pascalCase } from "change-case";

const mergeToTitleCase = (terms: String[]) => {
  return pascalCase(terms.join(" "));
};

interface Attributes {
  [key: string]: string[];
}

interface Meta {
  component: string;
  attributes: Attributes;
}

export default function (plop: NodePlopAPI) {
  // @ts-ignore
  plop.setPartial("dataAttrPartial", (attributes: Attributes): string => {
    return Object.keys(attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);
        return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
      })
      .join(" ");
  });

  // @ts-ignore
  plop.setPartial("propertiesPartial", (meta: Meta) => {
    const propertiesString = Object.keys(meta.attributes).map((attribute) => {
      const singularizedAttribute = singularize(attribute);
      const attributeType = mergeToTitleCase([
        meta.component,
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

  // @ts-ignore
  plop.setPartial("typesPartial", (meta) => {
    const attributeTypes = Object.keys(meta.attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);

        const typeDefinition = `export enum ${pascalCase(
          meta.component,
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
        choices: ["button", "card", "material-icon"],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    actions: function (data: any) {
      const actions = [];

      actions.push({
        type: "add",
        path: `src/components/${data.component}/component.ts`,
        data: { designSystem },
        templateFile: `plop-templates/${data.component}/component.ts`,
      });

      actions.push({
        type: "add",
        path: `src/components/${data.component}/component.stories.ts`,
        data: { designSystem },
        templateFile: `plop-templates/${data.component}/component.stories.ts`,
      });

      actions.push({
        type: "add",
        path: `src/components/${data.component}/component.test.ts`,
        data: { designSystem },
        templateFile: `plop-templates/${data.component}/component.test.ts`,
      });

      return actions;
    },
  });
}
