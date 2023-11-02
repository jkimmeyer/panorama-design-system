import { singularize } from ".";
import { pascalCase } from "change-case";

interface Meta {
  component: string;
  componentName: string;
  attributes: Attributes;
}

interface Attributes {
  [key: string]: string[];
}

const mergeToTitleCase = (terms: string[]) => {
  return pascalCase(terms.join(" "));
};

export const typesPartial = (meta: Meta) => {
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
};

export const propertiesPartial = (meta: Meta) => {
  const propertiesString = Object.keys(meta.attributes).map((attribute) => {
    const singularizedAttribute = singularize(attribute);
    const attributeType = mergeToTitleCase([
      meta.componentName,
      singularizedAttribute,
    ]);
    const propertyDefinition = `@property({ type: String, reflect: true })`;
    const defaultDefinition = `${singularizedAttribute}!: ${attributeType}`;
    return [propertyDefinition, defaultDefinition].join("\n");
  });

  return propertiesString.join("\n\n");
};

export const dataAttrPartial = (attributes: Attributes): string => {
  return Object.keys(attributes)
    .map((attribute) => {
      const singularizedAttribute = singularize(attribute);
      return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
    })
    .join(" ");
};
