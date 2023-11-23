import { html } from "lit-html";

import "../design-tokens-a.css";
import "../design-tokens-b.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export default {
  decorators: [
    (story, category) => {
      console.log(category.componentId);
      if (category.componentId.includes("beispiel-b")) {
        return html` <div data-theme-b>${story()}</div>`;
      }
      return html` <div data-theme-a>${story()}</div>`;
    },
  ],
};
