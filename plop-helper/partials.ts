import { singularize } from ".";
import { pascalCase, paramCase } from "change-case";
import { Appearance } from "../design-system";

interface Property {
  attribute?: string;
  type: string;
  required?: boolean;
  default?: boolean | string | object | null;
}
interface Variant {
  [key: string]: string[] | Appearance[];
}
interface Props {
  variants: Variant;
  properties: Property[];
  name: string;
  meta: string;
}

const mergeToTitleCase = (terms: string[]) => {
  return pascalCase(terms.join(" "));
};

// Type-Guard
const isAppearanceArray = (array: unknown): array is Appearance[] => {
  return Array.isArray(array) && array[0].name !== undefined;
};

export const types = ({ variants, name }: Props) => {
  const attributeTypes = Object.keys(variants)
    .map((variant: string) => {
      const singularizedAttribute = singularize(variant);

      const typeDefinition = `export enum ${pascalCase(name)}${pascalCase(
        singularizedAttribute,
      )} {`;
      const typeClosing = "}";

      let typeData = variants[variant];

      if (isAppearanceArray(typeData)) {
        typeData = typeData.map((value: Appearance) => value.name);
      }

      const types = typeData
        .map(
          (value: string) => `  ${pascalCase(value)} = "${paramCase(value)}"`,
        )
        .join(",\n");

      return [typeDefinition, types, typeClosing].join("\n");
    })
    .join("\n\n");

  return attributeTypes;
};

export const properties = ({ variants, properties, name }: Props) => {
  const variantsPropArray = Object.keys(variants).map((attribute) => {
    const singularizedAttribute = singularize(attribute);
    const attributeType = mergeToTitleCase([name, singularizedAttribute]);

    const propertyDefinition = `@property({ type: String, reflect: true })`;
    const defaultDefinition = `${singularizedAttribute}!: ${attributeType};`;
    return [propertyDefinition, defaultDefinition].join("\n");
  });

  const propsArray: string[] = [];

  Object.entries(properties).forEach(([key, value]) => {
    const { attribute, type, default: defaultValue, required } = value;

    const attributeString = attribute ? `, attribute: "${attribute}"` : "";
    ``;

    const propertyDefinition = `@property({ type: ${pascalCase(
      type,
    )}, reflect: true${attributeString} })`;

    const defaultDeclaration =
      typeof defaultValue === "string"
        ? ` = "${defaultValue}"`
        : `: ${type} = ${defaultValue}`;

    const defaultOrTypeWithDefault = value.required
      ? `: ${type}`
      : defaultDeclaration;

    const defaultDefinition = `${key}${
      required ? "!" : ""
    }${defaultOrTypeWithDefault};`;

    propsArray.push([propertyDefinition, defaultDefinition].join("\n"));
  });

  return [...variantsPropArray, ...propsArray, ""].join("\n\n");
};

export const dataAttributes = ({ variants }: Props) => {
  return Object.keys(variants)
    .map((variant) => {
      const singularizedAttribute = singularize(variant);
      return `data-${singularizedAttribute}="\${this.${singularizedAttribute}}"`;
    })
    .join(" ");
};

export const storybookArgs = ({ variants, properties }: Props) => {
  const variantArgs = Object.keys(variants).map((variant: string) => {
    let typeData = variants[variant];

    const singularizedAttribute = singularize(variant);

    if (isAppearanceArray(typeData)) {
      typeData = typeData.map((value: Appearance) => value.name);
    }

    return `${singularizedAttribute}: "${typeData[0]}",`;
  });

  const propertyArgs: string[] = [];

  Object.entries(properties).forEach(([key, value]) => {
    const { default: defaultValue, required } = value;

    const defaultDeclaration =
      typeof defaultValue === "string"
        ? `"${defaultValue}"`
        : `${defaultValue}`;

    const defaultOrTypeWithDefault = required
      ? `: undefined`
      : `: ${defaultDeclaration}`;

    propertyArgs.push(`${key}${defaultOrTypeWithDefault},`);
  });

  return [...variantArgs, ...propertyArgs, ""].join("\n");
};

export const storybookArgTypes = ({ name, variants, properties }: Props) => {
  const variantArgs =

  const propertyArgs: string[] = [];

  Object.entries(properties).forEach(([key, value]) => {
    const { type } = value;

    const prepend = `${key}: {`;
    const options = `  type: "${type}"`;
    const append = "},";

    propertyArgs.push([prepend, options, append].join("\n"));
  });

  return [...variantArgs, ...propertyArgs, ""].join("\n");
};

const storybookArgTypesForVariants = ({ name, variants, properties }: Props) => {
  Object.keys(variants).map((variant: string) => {
    let typeData = variants[variant];

    if (isAppearanceArray(typeData)) {
      typeData = typeData.map((value: Appearance) => value.name);
    }
    const singularizedAttribute = singularize(variant);

    const prepend = `${singularizedAttribute}: {`;
    const options = `  options: ${mergeToTitleCase([
      name,
      singularizedAttribute,
    ])},`;
    const control = `  control: { type: "select" }`;
    const append = "},";

    return [prepend, options, control, append].join("\n");
  })
};
