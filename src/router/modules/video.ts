import { RouteRecordRaw } from "vue-router";

const VideoRoute: RouteRecordRaw = {
  path: "/video",
  component: () => import("/@/layout/Content.vue"),
  redirect: "/video/format",
  meta: {
    name: "视频处理",
  },
  children: [
    {
      path: "/video/format",
      component: () => import("/@/views/video/format/VideoFormat.vue"),
      meta: {
        name: "格式转换",
      },
    },
    {
      path: "/video/clip",
      component: () => import("/@/views/video/clip/VideoClip.vue"),
      meta: {
        name: "视频剪辑",
      },
    },
  ],
};

export default VideoRoute;
