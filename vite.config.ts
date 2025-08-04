import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // This must match your repository name exactly
  build: {
    outDir: "dist",
  },
});
