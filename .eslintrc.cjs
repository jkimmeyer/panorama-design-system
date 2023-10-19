module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:wc/recommended",
    "plugin:lit/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: ["./tsconfig.json"],
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
}
