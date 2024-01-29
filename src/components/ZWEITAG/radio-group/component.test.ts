import { describe, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
import {
RadioGroupOption
} from "./component";

interface RadioGroupProps {
  options?: RadioGroupOption[];
  disabled?: boolean;
}

const radioGroup = ({
  options = [{ option1: "Option 1" }, { option2: "Option 2" }],
  disabled,
}: RadioGroupProps) =>
  html`<zw-radio-group
    label="Radio Group"
    .options="${options}"
    ?disabled="${disabled}"
  ></zw-radio-group>`;

describe("RadioGroup", () => {
  it("renders", async () => {
    await fixture(radioGroup({}));
    const component = await screen.findByShadowLabelText("Radio Group");

    expect(component).to.exist;
  });


  it("renders all options", async () => {
    await fixture(radioGroup({}));

    const options = await screen.findAllByShadowRole("radio");
    const option1 = await screen.findByShadowLabelText("Option 1");
    const option2 = await screen.findByShadowLabelText("Option 2");

    expect(options).to.have.length(2);
    expect(option1).to.exist;
    expect(option2).to.exist;
  })

  it("is accessible", async () => {
    const component = await fixture(radioGroup({}));

    await expect(component).to.be.accessible();
  });

  it("is selected when clicked", async () => {
    await fixture(radioGroup({}));
    const component = await screen.findByShadowLabelText("Option 1");
    const radioButtons = await screen.findAllByShadowRole("radio");

    await component.click();

    expect(component).to.be.checked;
    expect(radioButtons[1]).not.to.be.checked;
  });


  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(radioGroup({ disabled: true }));

      const components = await screen.findAllByShadowRole("radio");
      components.forEach((component) => {
        expect(component).to.have.attribute("disabled");
      });
    });

    it("is not selected when clicked", async () => {
      await fixture(radioGroup({ disabled: true }));
      const component = await screen.findByShadowLabelText("Option 1");

      await component.click();

      expect(component).not.to.be.checked;
    });
  });
});
