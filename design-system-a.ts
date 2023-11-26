import buttonConfig from "./plop-templates/button/component.json";
import inputConfig from "./plop-templates/input/component.json";
import checkboxConfig from "./plop-templates/checkbox/component.json";
import radioGroupConfig from "./plop-templates/radio-group/component.json";
import iconConfig from "./plop-templates/icon/component.json";
import { DesignSystem, ColorPurpose } from "./src/types";

export enum ColorTheme {
  Primary = "primary",
  Secondary = "secondary",
}

export const ButtonAppearances = [
  {
    name: "filled",
    color: ColorPurpose.OnMain,
    "border-color": ColorPurpose.Transparent,
    "background-color": ColorPurpose.Main,
  },
];

export const designSystemA: DesignSystem = {
  meta: {
    prefix: "pano-a",
  },
  components: {
    button: {
      variants: {
        appearances: ButtonAppearances,
        sizes: ["medium"],
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
