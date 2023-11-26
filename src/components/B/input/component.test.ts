import { describe, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
import { InputSize } from "./component";

interface InputProps {
  size?: InputSize;
  disabled?: boolean;
}

const input = ({ size = InputSize.Medium, disabled }: InputProps) =>
  html`<pano-b-input
    label="Text Input"
    ?disabled="${disabled}"
    size="${size}"
  ></pano-b-input>`;

describe("Input", () => {
  it("renders", async () => {
    await fixture(input({}));
    const component = await screen.findByShadowLabelText("Text Input");

    expect(component).to.exist;
  });

  it("is accessible", async () => {
    const component = await fixture(input({}));

    await expect(component).to.be.accessible();
  });

  describe("with size", () => {
    it("applies a data-attribute", async () => {
      await fixture(input({ size: InputSize.Medium }));
      const component = await screen.findByShadowRole("textbox");
      expect(component).to.have.attribute("data-size", "medium");
    });
  });

  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(input({ disabled: true }));

      const component = await screen.findByShadowRole("textbox");
      expect(component).to.have.attribute("disabled");
    });
  });
});
