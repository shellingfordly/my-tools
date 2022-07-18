import type { RouteRecordRaw } from "vue-router";
import { ToolsRoute } from "./tools";
import { VideoRoute } from "./video";

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("/@/layout/Layout.vue"),
    redirect: "/home/video",
    children: [ToolsRoute, VideoRoute],
  },
];
