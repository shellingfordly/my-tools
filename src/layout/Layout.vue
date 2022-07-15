<script lang="ts" setup>
import { routes } from "/@/router/routes";

const menus = computed(() => {
  const route = routes.find((v) => v.path === "/home");
  if (!route) return [];
  return route.children?.map((r) => ({
    name: r.meta?.name,
    path: r.path,
  }));
});

const route = useRoute();
const router = useRouter();
const selectedKey = ref(route.path);

function onClick(path: string) {
  router.push(path);
  selectedKey.value = path;
}
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-header class="header">
      <div style="width: 500px"></div>
      <a-menu
        class="menu"
        :selectedKeys="[selectedKey]"
        mode="horizontal"
        @menu-item-click="onClick"
      >
        <a-menu-item v-for="menu in menus" :key="menu.path">
          {{ menu?.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout style="height: 100%">
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: center;
  border-bottom: 1px solid #eee;
}
</style>
