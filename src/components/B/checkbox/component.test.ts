import { describe, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
import { CheckboxSize } from "./component";

interface CheckboxProps {
  size?: CheckboxSize;
  disabled?: boolean;
}

const checkbox = ({ size = CheckboxSize.Small, disabled }: CheckboxProps) =>
  html`<pano-b-checkbox
    label="Hello, world!"
    ?disabled="${disabled}"
    size="${size}"
  ></pano-b-checkbox>`;

describe("Checkbox", () => {
  it("renders", async () => {
    await fixture(checkbox({}));
    const component = await screen.findByShadowRole("checkbox");

    expect(component).to.exist;
    expect(component).not.to.be.checked;
  });

  it("is accessible", async () => {
    const component = await fixture(checkbox({}));

    await expect(component).to.be.accessible();
  });

  it("is checked when clicked", async () => {
    await fixture(checkbox({}));
    const component = await screen.findByShadowRole("checkbox");

    await component.click();

    expect(component).to.be.checked;
  });

  describe("with size", () => {
    it("applies a data-attribute", async () => {
      await fixture(checkbox({ size: CheckboxSize.Small }));
      const component = await screen.findByShadowRole("checkbox");
      expect(component.parentElement).to.have.attribute("data-size", "small");
    });
  });

  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(checkbox({ disabled: true }));
      const component = await screen.findByShadowRole("checkbox");

      expect(component).to.have.attribute("disabled");
    });

    it("is not checked when clicked", async () => {
      await fixture(checkbox({ disabled: true }));
      const component = await screen.findByShadowRole("checkbox");

      await component.click();

      expect(component).not.to.be.checked;
    });
  });
});
