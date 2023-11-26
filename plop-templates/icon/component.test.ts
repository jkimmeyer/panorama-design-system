import { describe, it } from "vitest";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";
{{#if variants}}
import {
{{#each variants}}
  {{properCase ../name}}{{ singularize (titleCase @key) }},
{{/each}}
} from "./component";
{{/if}}

interface IconProps {
  {{> testProps }}
  iconName: string,
}

  const icon = ({
    iconName = "home"
  {{> testDefaults}}
}: IconProps) =>
  html`<{{meta.prefix}}-icon
    iconName="${iconName}"
    {{> testAttributes}}
  ></{{meta.prefix}}-icon>`;

describe("Icon", () => {
  it("renders", async () => {
    const component = await fixture(icon({}));

    expect(component).to.exist;
  });

  {{> variantTests}}

  it("is accessible", async () => {
    const component = await fixture(icon({}));

    await expect(component).to.be.accessible();
  });
});
