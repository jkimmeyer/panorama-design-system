import { afterEach } from "vitest";
import "@testing-library/jest-dom/vitest";
import { fixtureCleanup } from "@open-wc/testing";

// cleanup fixtures after each test
afterEach(() => {
  fixtureCleanup();
});
