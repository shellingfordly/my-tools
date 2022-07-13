import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: { port: 3080 },
  resolve: {
    alias: [
      {
        find: /^\/@\//,
        replacement: `${resolve(__dirname, "./src")}/`,
      },
    ],
  },
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router"],
    }),
  ],
});
