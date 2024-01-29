import { html } from "lit-html";

import "../design-systems/a/design-tokens.css";
import "../design-systems/b/design-tokens.css";
import "../design-systems/ikea/design-tokens.css";
import "../design-systems/zweitag/design-tokens.css";
import "../design-systems/hsd/design-tokens.css";

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
      if (category.componentId.includes("beispiel-b")) {
        return html` <div data-theme-b>${story()}</div>`;
      }
      if (category.componentId.includes("beispiel-ikea")) {
        return html` <div data-theme-ikea>${story()}</div>`;
      }
      if (category.componentId.includes("beispiel-zweitag")) {
        return html` <div data-theme-zweitag>${story()}</div>`;
      }
      if (category.componentId.includes("beispiel-hsd")) {
        return html` <div data-theme-hsd>${story()}</div>`;
      }
      return html` <div data-theme-a>${story()}</div>`;
    },
  ],
};
