module.exports = {
  plugins: [
    require("postcss-nesting"),
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require("postcss-preset-env")({
      features: {
        "custom-properties": false,
        "logical-properties-and-values": false,
        "nesting-rules": false,
      },
    }),
  ],
};
