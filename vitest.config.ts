import { fileURLToPath } from "node:url";
import { mergeConfig } from "vite";
import { configDefaults, defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      exclude: [...configDefaults.exclude, "plop-templates/**/*"],
      include: [...configDefaults.include, "src/**/test.ts"],
      root: fileURLToPath(new URL("./", import.meta.url)),
      setupFiles: "./vitest.setup.ts",
    },
  }),
);
