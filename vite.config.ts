import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "zen-ui",
      fileName: "zen-ui",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "react-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
  },
});
