import buttonConfig from "../../plop-templates/button/component.json";
import inputConfig from "../../plop-templates/input/component.json";
import checkboxConfig from "../../plop-templates/checkbox/component.json";
import radioGroupConfig from "../../plop-templates/radio-group/component.json";
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
    name: "outline",
    color: ColorPurpose.Main,
    "border-color": ColorPurpose.Main,
    "background-color": ColorPurpose.Transparent,
  },
];

export const designSystemB: DesignSystem = {
  meta: {
    prefix: "pano-b",
  },
  components: {
    button: {
      variants: {
        appearances: ButtonAppearances,
        sizes: ["medium"],
        themes: [ColorTheme.Primary],
      },
      properties: {
        ...buttonConfig.properties,
      },
    },
    checkbox: {
      variants: {
        sizes: ["small"],
      },
      properties: {
        ...checkboxConfig.properties,
      },
    },
    input: {
      variants: {
        sizes: ["medium"],
      },
      properties: {
        ...inputConfig.properties,
      },
    },
    "radio-group": {
      properties: {
        ...radioGroupConfig.properties,
      },
    },
    icon: {
      properties: {
        ...iconConfig.properties,
      },
    },
  },
};
