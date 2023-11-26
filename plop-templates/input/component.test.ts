import { describe, it } from "vitest";
import { screen } from "shadow-dom-testing-library";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
{{#if variants}}
import {
{{#each variants}}
  {{properCase ../name}}{{ singularize (titleCase @key) }},
{{/each}}
} from "./component";
{{/if}}

interface InputProps {
  {{> testProps}}
  disabled?: boolean;
}

const input = ({
  {{> testDefaults}}
  disabled,
}: InputProps) =>
  html`<{{meta.prefix}}-input
    label="Text Input"
    ?disabled="${disabled}"
    {{> testAttributes}}
  ></{{meta.prefix}}-input>`;

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

  {{> variantTests role="textbox"}}

  describe("when disabled", () => {
    it("is disabled", async () => {
      await fixture(input({ disabled: true }));

      const component = await screen.findByShadowRole("textbox");
      expect(component).to.have.attribute("disabled");
    });
  });
});
