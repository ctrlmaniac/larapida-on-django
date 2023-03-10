import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const commonConfigs = {
  plugins: [react()],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
    },
  },
};

export default defineConfig(({ command }) => {
  if (command === "serve") {
    return {
      ...commonConfigs,
      server: {
        proxy: {
          "/api": {
            target: "http://127.0.0.1:8000",
          },
        },
      },
    };
  } else {
    return {
      ...commonConfigs,
      build: {
        rollupOptions: {
          output: {
            assetFileNames: (assetInfo) => {
              let extType = assetInfo.name.split(".").at(1);
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
              }
              return `static/client/${extType}/[name]-[hash][extname]`;
            },
            chunkFileNames: "static/client/js/[name]-[hash].js",
            entryFileNames: "static/client/js/[name]-[hash].js",
          },
        },
      },
    };
  }
});
