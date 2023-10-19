import { defineConfig } from "vite";
import postcssLit from "rollup-plugin-postcss-lit";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [postcssLit()],
  resolve: {
    preserveSymlinks: true,
  },
  build: {
    rollupOptions: {
      external: /^lit/,
    },
  },
});
