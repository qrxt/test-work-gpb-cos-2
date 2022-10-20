import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: path.resolve(__dirname, "./src/components"),
      types: path.resolve(__dirname, "./src/types"),
      theme: path.resolve(__dirname, "./src/theme"),
      assets: path.resolve(__dirname, "./src/assets"),
      messages: path.resolve(__dirname, "./src/messages"),
      lib: path.resolve(__dirname, "./src/lib"),
      __tests__: path.resolve(__dirname, "./__tests__"),
      "@redux": path.resolve(__dirname, "./src/redux"),
    },
  },
  plugins: [
    react({
      jsxRuntime: "automatic",
      // jsxImportSource: "@emotion/react",
      babel: {
        // presets: ["@emotion/babel-preset-css-prop"],
        // plugins: ["@emotion"],
      },
    }),
  ],
});
