import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({

  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@style": fileURLToPath(new URL('./src/scss', import.meta.url)),
      "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/components', import.meta.url)),
      "@interfaces":  fileURLToPath(new URL('./src/interfaces', import.meta.url)),
    },
  },
  base: "",
});