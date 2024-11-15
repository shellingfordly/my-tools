import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import AutoComponents from "unplugin-vue-components/vite";
import { ArcoResolver } from "unplugin-vue-components/resolvers";
import Unocss from "unocss/vite";

export default defineConfig({
  base: "/my-tools/",
  server: {
    port: 3080,
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
    proxy: {
      "/tinify": {
        target: "https://api.tinify.com/", // 要代理到的目标服务器
        changeOrigin: true, // 设置为 true 可以解决跨域问题
        rewrite: (path) => path.replace(/^\/tinify/, ""),
      },
    },
  },
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
    Unocss(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/core"],
      dirs: ["./src/hooks"],
    }),
    AutoComponents({
      resolvers: [
        ArcoResolver({
          sideEffect: true,
        }),
      ],
    }),
  ],
});
