import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("/@/layout/Layout.vue"),
    redirect: "/home/video",
    children: [
      {
        path: "/home/tools",
        component: () => import("/@/views/tools/Tools.vue"),
        meta: {
          name: "常用工具",
        },
      },
      {
        path: "/home/video",
        component: () => import("/@/views/video/Video.vue"),
        meta: {
          name: "视频处理",
        },
      },
    ],
  },
];
