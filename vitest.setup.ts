import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fixtureCleanup } from "@open-wc/testing";
import { toHaveNoViolations } from "jest-axe";
import { expect } from "vitest";
expect.extend(toHaveNoViolations);

// cleanup fixtures after each test
afterEach(() => {
  fixtureCleanup();
});
