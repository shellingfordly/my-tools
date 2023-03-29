import { RouteRecordRaw } from "vue-router";

const ImgRoute: RouteRecordRaw = {
  path: "/img",
  component: () => import("/@/layout/Content.vue"),
  redirect: "/img/clip",
  meta: {
    name: "图片处理",
  },
  children: [
    {
      path: "/img/clip",
      component: () => import("/@/views/image/clip/ImgClip.vue"),
      meta: {
        name: "图片裁剪",
      },
    },
  ],
};

export default ImgRoute;
