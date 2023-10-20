const Colors = {
  Main: "main",
  OnMain: "contrast-main",
  Additional: "additional",
  None: "none",
  Transparent: "transparent",
};

export const designSystem = {
  prefix: "pfreundt",
  badge: {
    variants: ["text", "outline", "filled"],
    sizes: ["small", "medium", "large"],
  },
  button: {
    appearances: ["primary", "secondary"],
    variants: ["text", "outline", "filled"],
    sizes: ["small", "medium", "large"],
  },
  variants: {
    filled: {
      text: Colors.OnMain,
      border: Colors.OnMain,
      background: Colors.Main,
    },
    outline: {
      text: Colors.Main,
      border: Colors.Main,
      background: Colors.None,
    },
    text: {
      text: Colors.Main,
      border: Colors.Transparent,
      background: Colors.None,
    },
  },
};
