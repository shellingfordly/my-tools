import { RouteRecordRaw } from "vue-router";

const CommonRoute: RouteRecordRaw = {
  path: "/common",
  component: () => import("/@/layout/pages/MenuPage.vue"),
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
  ],
};

export default CommonRoute;
