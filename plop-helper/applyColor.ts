import { paramCase } from "change-case";

interface Appearance {
  color: string;
  border: string;
  background: string;
}

type ColorPurpose = "color" | "border" | "background";

export const applyColor = (
  name: string,
  appearance: Appearance,
  useCase: ColorPurpose,
) => {
  const colorVariable = appearance[useCase];

  if (colorVariable === "transparent") {
    return "transparent";
  }

  const color = `var(--${name}-${paramCase(colorVariable)}-color)`;

  return color;
};
