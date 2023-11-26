import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fixtureCleanup } from "@open-wc/testing";
import "vitest-axe/extend-expect";

// cleanup fixtures after each test
afterEach(() => {
  fixtureCleanup();
});
