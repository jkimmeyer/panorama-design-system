interface Variant {
  [key: string]: VariantInstance;
}

interface VariantInstance {
  [key: string]: string;
}

export const applyColor = (
  component: string,
  variants: Variant,
  currentVariant: string,
  useCase: string,
) => {
  const color = variants[currentVariant][useCase];

  if (color === "main") return `var(--${component}-${color}-color)`;
  if (color === "onMain") return `var(--${component}-${color}-color)`;
  if (color === "transparent") return `transparent`;
  if (color === "none") return `none`;
  return `none`;
};
