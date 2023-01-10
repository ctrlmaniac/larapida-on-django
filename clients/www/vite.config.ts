import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: "static/www/[name]-[hash][extname]",
        chunkFileNames: "static/www/[name]-[hash].js",
        entryFileNames: "static/www/[name]-[hash].js",
      },
    },
  },
});
