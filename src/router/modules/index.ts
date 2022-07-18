import type { RouteRecordRaw } from "vue-router";
import { ToolsRoute } from "./tools";

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
      ToolsRoute,
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
