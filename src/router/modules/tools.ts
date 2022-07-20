import { RouteRecordRaw } from "vue-router";

export const CommonRoute: RouteRecordRaw = {
  path: "/home/common",
  component: () => import("/@/layout/pages/MenuPage.vue"),
  redirect: "/home/common/counter",
  meta: {
    name: "常用工具",
  },
  children: [
    {
      path: "/home/common/counter",
      component: () => import("/@/views/common/counter/Counter.vue"),
      meta: {
        name: "计算工具",
      },
    },
  ],
};
