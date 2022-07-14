import { createRouter, createWebHashHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";
import type { App } from "vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/video",
  },
  {
    path: "/video",
    component: () => import("/@/views/video/Video.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export function setupRouter(app: App) {
  app.use(router);
}
