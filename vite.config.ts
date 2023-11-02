import { defineConfig } from "vite";
import postcssLit from "rollup-plugin-postcss-lit";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [postcssLit()],
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    lib: {
      entry: [path.resolve(__dirname, "src/main.ts")],
      formats: ["es"],
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
});
