module.exports = {
  plugins: [
    require("postcss-nesting"),
    require("postcss-preset-env")({
      features: {
        "custom-properties": false,
        "logical-properties-and-values": false,
        "nesting-rules": false,
      },
    }),
  ],
};
