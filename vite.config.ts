import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";

export default defineConfig({

  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL('./src', import.meta.url)),
      "@style": fileURLToPath(new URL('./src/PalacePackage/scss', import.meta.url)),
      "@assets": fileURLToPath(new URL('./src/assets', import.meta.url)),
      "@tools": fileURLToPath(new URL('./src/utils/tools', import.meta.url)),
      "@components": fileURLToPath(new URL('./src/kaiComponents', import.meta.url)),
      "@interfaces":  fileURLToPath(new URL('./src/utils/interfaces', import.meta.url)),
    },
  },
});