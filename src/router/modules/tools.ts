import { RouteRecordRaw } from "vue-router";

export const ToolsRoute: RouteRecordRaw = {
  path: "/home/tools",
  component: () => import("/@/views/tools/ToolsPage.vue"),
  redirect: "/home/tools/queer",
  meta: {
    name: "常用工具",
  },
  children: [
    {
      path: "/home/tools/queer",
      component: () => import("../../views/tools/components/queer/Queer.vue"),
      meta: {
        name: "奇怪的计算工具",
      },
    },
  ],
};
