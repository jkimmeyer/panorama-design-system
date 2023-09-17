import { loadJSON } from "./plop-helper/index.js";

export default function (plop) {
  plop.setGenerator("component", {
    description:
      "Create a base component based on your design system configuration",
    prompts: [
      {
        type: "list",
        choices: ["button", "card"],
        name: "component",
        message: "Please select the component you want to create",
      },
    ],
    actions: function (data) {
      const actions = [];
      const { designSystem } = loadJSON("../design-system.json");

      console.log({ designSystem });

      actions.push({
        type: "add",
        path: `src/${data.component}.js`,
        data: { designSystem },
        templateFile: `plop-templates/${data.component}/component.ts`,
      });

      return actions;
    },
  });
}
