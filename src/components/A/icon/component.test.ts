import { describe, it } from "vitest";
import { fixture, expect, html } from "@open-wc/testing";

import "./component";

interface IconProps {
  iconName?: string;
}

const icon = ({ iconName = "home" }: IconProps) =>
  html`<pano-a-icon iconName="${iconName}"></pano-a-icon>`;

describe("Icon", () => {
  it("renders", async () => {
    const component = await fixture(icon({}));

    expect(component).to.exist;
  });

  it("is accessible", async () => {
    const component = await fixture(icon({}));

    await expect(component).to.be.accessible();
  });
});
