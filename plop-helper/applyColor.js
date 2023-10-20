export const applyColor = (component, variants, currentVariant, useCase) => {
  const color = variants[currentVariant][useCase];

  if (color === "main") return `var(--${component}-${color}-color)`;
  if (color === "onMain") return `var(--${component}-${color}-color)`;
  if (color === "transparent") return `transparent`;
  if (color === "none") return `none`;
};
