import buttonConfig from "../../plop-templates/button/component.json";
import inputConfig from "../../plop-templates/input/component.json";
import checkboxConfig from "../../plop-templates/checkbox/component.json";
import iconConfig from "../../plop-templates/icon/component.json";

import { DesignSystem, ColorPurpose } from "../../src/types";

export enum ColorTheme {
  Primary = "primary",
}

export const ButtonAppearances = [
  {
    name: "filled",
    color: ColorPurpose.OnMain,
    "border-color": ColorPurpose.Transparent,
    "background-color": ColorPurpose.Main,
  },
  {
    name: "text",
    color: ColorPurpose.OnMain,
    "border-color": ColorPurpose.Transparent,
    "background-color": ColorPurpose.Transparent,
  },
];

export const designSystemHsd: DesignSystem = {
  meta: {
    prefix: "hsd",
  },
  components: {
    button: {
      variants: {
        appearances: ButtonAppearances,
        sizes: ["small", "medium", "large"],
        themes: [ColorTheme.Primary],
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
        sizes: ["small", "medium", "large"],
      },
      properties: {
        ...inputConfig.properties,
      },
    },
    icon: {
      properties: {
        ...iconConfig.properties,
      },
    },
  },
};
