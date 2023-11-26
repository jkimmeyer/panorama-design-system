import { describe, it, expect } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, html } from "@open-wc/testing";

import "./component";

describe("Button", () => {
  it("renders", async () => {
    await fixture(
      html`<pano-button
        label="Hello, world!"
        appearance="filled"
        theme="primary"
        size="medium"
        button-type="button"
      ></pano-button>`,
    );
    const component = await screen.findByShadowRole("button");

    expect(component).toBeInTheDocument();
  });

  it("emits an event on click", async () => {
    await fixture(
      html`<pano-button
        label="button"
        appearance="filled"
        theme="primary"
        size="medium"
        button-type="button"
      ></pano-button>`,
    );

    const component = await screen.findByShadowRole("button");
    expect(component).toBeInTheDocument();
  });

  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(
        html`<pano-button
          label="button"
          appearance="filled"
          theme="primary"
          size="medium"
          button-type="button"
          disabled
        ></pano-button>`,
      );

      const component = await screen.findByShadowRole("button");
      expect(component).toBeInTheDocument();
      expect(component).toBeDisabled();
    });
  });
});
