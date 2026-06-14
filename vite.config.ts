import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use "/" for local dev; override with "/pundeerdental/" at build time for GH Pages.
export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    target: "es2019",
    cssCodeSplit: true,
  },
});
