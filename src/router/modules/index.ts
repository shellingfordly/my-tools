import type { RouteRecordRaw } from "vue-router";
import { CommonRoute } from "./tools";
import { VideoRoute } from "./video";

export const HomeRoute = {
  path: "/home",
  component: () => import("/@/layout/Layout.vue"),
  redirect: "/home/video",
  children: [CommonRoute, VideoRoute],
};

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/home",
  },
  HomeRoute,
];
