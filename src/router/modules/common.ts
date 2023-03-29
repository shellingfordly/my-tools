import { RouteRecordRaw } from "vue-router";

const CommonRoute: RouteRecordRaw = {
  path: "/common",
  component: () => import("/@/layout/Content.vue"),
  redirect: "/common/counter",
  meta: {
    name: "常用工具",
  },
  children: [
    {
      path: "/common/counter",
      component: () => import("/@/views/common/counter/Counter.vue"),
      meta: {
        name: "计算工具",
      },
    },
    {
      path: "/common/demo",
      component: () => import("/@/views/common/demo/Demo.vue"),
      meta: {
        name: "Demo",
      },
    },
    {
      path: "/common/qrcode",
      component: () => import("/@/views/common/qrcode/QRcode.vue"),
      meta: {
        name: "二维码",
      },
    },
  ],
};

export default CommonRoute;
