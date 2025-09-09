import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/professional/", // ← MUST match repo name (trailing slash)
  plugins: [react()],
  build: {
    sourcemap: false, // ← disable source maps to avoid eval usage
    rollupOptions: {
      // nothing required here normally; left for future tweaks
    },
  },
});
