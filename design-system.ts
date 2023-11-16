import buttonConfig from "./plop-templates/button/component.json";
import inputConfig from "./plop-templates/input/component.json";
import checkboxConfig from "./plop-templates/checkbox/component.json";

export enum ColorTheme {
  Primary = "primary",
  Secondary = "secondary",
}

export enum ColorPurpose {
  Main = "main",
  OnMain = "onMain",
  Container = "container",
  OnContainer = "onContainer",
  Transparent = "transparent",
}

export const ButtonAppearances = [
  {
    name: "filled",
    color: ColorPurpose.OnMain,
    "border-color": ColorPurpose.Transparent,
    "background-color": ColorPurpose.Main,
  },
  {
    name: "outline",
    color: ColorPurpose.Main,
    "border-color": ColorPurpose.Main,
    "background-color": ColorPurpose.Transparent,
  },
];

export interface Appearance {
  name: string;
  color: ColorPurpose;
  "border-color": ColorPurpose;
  "background-color": ColorPurpose;
}
interface Variants {
  appearances?: Appearance[];
  themes?: ColorTheme[];
  sizes?: string[];
}

interface IProperties {
  [key: string]: Property;
}
interface Property {
  type: string;
  required?: boolean;
  default?: boolean | string | object | null;
}

interface DesignSystemComponent {
  variants?: Variants;
  properties?: IProperties;
}
interface IDesignSystemComponents {
  [key: string]: DesignSystemComponent;
}

interface Meta {
  prefix: string;
}

interface DesignSystem {
  meta: Meta;
  components: IDesignSystemComponents;
}

export const designSystem: DesignSystem = {
  meta: {
    prefix: "pano",
  },
  components: {
    button: {
      variants: {
        appearances: ButtonAppearances,
        sizes: ["small", "medium", "large"],
        themes: [ColorTheme.Primary, ColorTheme.Secondary],
      },
      properties: {
        ...buttonConfig.properties,
      },
    },
    checkbox: {
      properties: {
        ...checkboxConfig.properties,
      },
    },
    input: {
      variants: {
        sizes: ["small", "medium"],
      },
      properties: {
        ...inputConfig.properties,
      },
    },
    "material-icon": {},
  },
};
