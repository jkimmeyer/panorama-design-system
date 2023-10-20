import { designSystem } from "./design-system.js";
import { singularize } from "./plop-helper/index.js";
import { pascalCase } from "change-case";

export default function (plop) {
  plop.setPartial("dataAttrPartial", (attributes) => {
    return Object.keys(attributes)
      .map((attribute) => {
        return `data-${singularize(attribute)}="\${this.${singularize(
          attribute,
        )}}"`;
      })
      .join(" ");
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

  plop.setHelper(
    "applyColor",
    (component, variants, currentVariant, useCase) => {
      const color = variants[currentVariant][useCase];

      if (color === "main") return `var(--${component}-${color}-color)`;
      if (color === "onMain") return `var(--${component}-${color}-color)`;
      if (color === "transparent") return `transparent`;
      if (color === "none") return `none`;
    },
  );

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

      return actions;
    },
  });
}
