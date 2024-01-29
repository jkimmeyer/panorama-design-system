import { describe, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
import { ButtonAppearance, ButtonSize, ButtonTheme } from "./component";

interface ButtonProps {
  appearance?: ButtonAppearance;
  size?: ButtonSize;
  theme?: ButtonTheme;
  disabled?: boolean;
}

const button = ({
  appearance = ButtonAppearance.Filled,
  size = ButtonSize.Small,
  theme = ButtonTheme.Primary,
  disabled,
}: ButtonProps) =>
  html`<zw-button
    label="Hello, world!"
    appearance="${appearance}"
    size="${size}"
    theme="${theme}"
    ?disabled="${disabled}"
    button-type="button"
  ></zw-button>`;

describe("Button", () => {
  it("renders", async () => {
    await fixture(button({}));
    const component = await screen.findByShadowRole("button");

    expect(component).to.exist;
  });

  describe("with appearance", () => {
    it("applies a data-attribute", async () => {
      await fixture(button({ appearance: ButtonAppearance.Filled }));
      const component = await screen.findByShadowRole("button");
      expect(component).to.have.attribute("data-appearance", "filled");
    });
  });

  describe("with size", () => {
    it("applies a data-attribute", async () => {
      await fixture(button({ size: ButtonSize.Small }));
      const component = await screen.findByShadowRole("button");
      expect(component).to.have.attribute("data-size", "small");
    });
  });

  describe("with theme", () => {
    it("applies a data-attribute", async () => {
      await fixture(button({ theme: ButtonTheme.Primary }));
      const component = await screen.findByShadowRole("button");
      expect(component).to.have.attribute("data-theme", "primary");
    });
  });

  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(button({ disabled: true }));

      const component = await screen.findByShadowRole("button");
      expect(component).to.have.attribute("disabled");
    });
  });

  it("is accessible", async () => {
    const component = await fixture(button({}));

    await expect(component).to.be.accessible();
  });
});
