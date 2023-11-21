import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fixtureCleanup } from "@open-wc/testing";
import * as matchers from "vitest-axe/matchers";
import { configureAxe } from "vitest-axe";
import { expect } from "vitest";
expect.extend(matchers);

configureAxe({
  rules: {
    // disable landmark rules when testing isolated components.
    region: { enabled: false },
  },
});

// cleanup fixtures after each test
// afterEach(() => {
//   fixtureCleanup();
// });
