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

interface ButtonProps {
  {{> testProps}}
  disabled?: boolean;
}

const button = ({
  {{> testDefaults}}
  disabled,
}: ButtonProps) =>
  html`<{{meta.prefix}}-button
    label="Hello, world!"
    {{> testAttributes}}
    ?disabled="${disabled}"
    button-type="button"
  ></{{meta.prefix}}-button>`;

describe("Button", () => {
  it("renders", async () => {
    await fixture(button({}));
    const component = await screen.findByShadowRole("button");

    expect(component).to.exist;
  });

  {{> variantTests role="button"}}

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
