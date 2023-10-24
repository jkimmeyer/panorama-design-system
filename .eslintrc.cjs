module.exports = {
  env: { browser: true, es2020: true, node: true },
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:wc/best-practice",
    "plugin:lit/recommended",
    "plugin:lit-a11y/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "lit-a11y"],
};
