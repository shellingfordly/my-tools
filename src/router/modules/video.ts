import { RouteRecordRaw } from "vue-router";

export const VideoRoute: RouteRecordRaw = {
  path: "/home/video",
  component: () => import("/@/layout/pages/MenuPage.vue"),
  redirect: "/home/video/format",
  meta: {
    name: "视频处理",
  },
  children: [
    {
      path: "/home/video/format",
      component: () => import("/@/views/video/format/FormatConvert.vue"),
      meta: {
        name: "格式转换",
      },
    },
  ],
};
