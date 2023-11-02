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
    button: {
      colors: ["primary", "secondary"],
      appearances: ["text", "outline", "filled"],
      sizes: ["small", "medium", "large"],
    },
    "material-icon": {},
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
