const Colors = {
  Main: "main",
  OnMain: "contrast-main",
  Additional: "additional",
  None: "none",
  Transparent: "transparent",
};

export const designSystem = {
  prefix: "ex",
  components: {
    badge: {
      appearances: ["text", "outline", "filled"],
      sizes: ["small", "medium", "large"],
    },
    button: {
      colors: ["primary", "secondary"],
      appearances: ["text", "outline", "filled"],
      sizes: ["small", "medium", "large"],
    },
  },
  appearances: {
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
