import { designSystem } from "./design-system.js";
import { singularize, applyColor } from "./plop-helper/index.js";
import { pascalCase } from "change-case";

const mergeToTitleCase = (terms) => {
  return pascalCase(terms.join(" "));
};

export default function (plop) {
  plop.setPartial("dataAttrPartial", (attributes) => {
    return Object.keys(attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);
        return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
      })
      .join(" ");
  });

  plop.setPartial("propertiesPartial", (meta) => {
    const propertiesString = Object.keys(meta.attributes).map((attribute) => {
      const singularizedAttribute = singularize(attribute);
      const attributeType = mergeToTitleCase([
        meta.component,
        singularizedAttribute,
      ]);
      const propertyDefinition = `@property({ type: String })`;
      const defaultDefinition = `${singularizedAttribute}: ${attributeType} = ${attributeType}.${pascalCase(
        meta.attributes[attribute][0]
      )}`;
      return [propertyDefinition, defaultDefinition].join("\n");
    });

    return propertiesString.join("\n\n");
  });

  plop.setPartial("typesPartial", (meta) => {
    const attributeTypes = Object.keys(meta.attributes)
      .map((attribute) => {
        const singularizedAttribute = singularize(attribute);

        const typeDefinition = `export enum ${pascalCase(
          meta.component,
        )}${pascalCase(singularizedAttribute)} {`;

        const types = meta.attributes[attribute]
          .map((value) => `  ${pascalCase(value)} = "${value}"`)
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
        choices: ["button", "card"],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    actions: function (data) {
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
