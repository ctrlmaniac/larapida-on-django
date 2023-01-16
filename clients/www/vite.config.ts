import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:8000",
      },
    },
  },
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
