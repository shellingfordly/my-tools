import type { App } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import { routes } from "./modules";

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: () => import("/@/layout/Layout.vue"),
      children: routes,
    },
  ],
});

export function setupRouter(app: App) {
  app.use(router);
}
