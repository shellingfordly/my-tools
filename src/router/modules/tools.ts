import { RouteRecordRaw } from "vue-router";

export const ToolsRoute: RouteRecordRaw = {
  path: "/home/tools",
  component: () => import("/@/pages/tools/ToolsPage.vue"),
  redirect: "/home/tools/counter",
  meta: {
    name: "常用工具",
  },
  children: [
    {
      path: "/home/tools/counter",
      component: () => import("/@/views/tools/counter/Counter.vue"),
      meta: {
        name: "计算工具",
      },
    },
  ],
};
