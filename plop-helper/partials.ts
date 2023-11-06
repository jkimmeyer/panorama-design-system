import { singularize } from ".";
import { pascalCase, paramCase } from "change-case";
import { Appearance } from "../design-system";

interface Props {
  variants: Attributes;
  name: string;
  meta: string;
}

interface Attributes {
  [key: string]: string[];
}

const mergeToTitleCase = (terms: string[]) => {
  return pascalCase(terms.join(" "));
};

// Type-Guard
const isAppearanceArray = (array: unknown): array is Appearance[] => {
  return Array.isArray(array) && array[0].name !== undefined;
};

export const types = ({ variants, name }: Props) => {
  console.log({ variants });

  const attributeTypes = Object.keys(variants)
    .map((variant: string) => {
      const singularizedAttribute = singularize(variant);

      const typeDefinition = `export enum ${pascalCase(name)}${pascalCase(
        singularizedAttribute,
      )} {`;

      let typeData;

      if (isAppearanceArray(variants[variant])) {
        typeData = variants[variant];
      } else {
        typeData = variants[variant];
      }

      console.log({ typeData });

      const types = typeData
        .map(
          (value: string) => `  ${pascalCase(value)} = "${paramCase(value)}"`,
        )
        .join(",\n");

      const typeClosing = "}";
      return [typeDefinition, types, typeClosing].join("\n");
    })
    .join("\n\n");

  return attributeTypes;
};

export const properties = ({ variants, name }: Props) => {
  const propertiesString = Object.keys(variants).map((attribute) => {
    const singularizedAttribute = singularize(attribute);
    const attributeType = mergeToTitleCase([name, singularizedAttribute]);

    const propertyDefinition = `@property({ type: String, reflect: true })`;
    const defaultDefinition = `${singularizedAttribute}!: ${attributeType}`;
    return [propertyDefinition, defaultDefinition].join("\n");
  });

  return propertiesString.join("\n\n");
};

export const dataAttributes = ({ variants }: Props) => {
  return Object.keys(variants)
    .map((variant) => {
      const singularizedAttribute = singularize(variant);
      return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
    })
    .join(" ");
};
