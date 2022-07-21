<script lang="ts" setup>
import { routes } from "/@/router/modules";

const route = useRoute();
const menus = computed(() => {
  const routeItem = routes.find((item) => {
    return route.path.includes(item.path);
  });
  if (!routeItem) return [];
  return routeItem.children?.map((r) => ({
    name: r.meta?.name,
    path: r.path,
  }));
});
const router = useRouter();
const selectedKey = computed(() => route.path);

function onClick(path: string) {
  router.push(path);
}
</script>

<template>
  <div flex hp-100>
    <div class="menu">
      <a-menu hp-100i :selectedKeys="[selectedKey]">
        <a-menu-item
          @click="onClick(menu.path)"
          :key="menu.path"
          v-for="menu in menus"
        >
          {{ menu.name }}
        </a-menu-item>
      </a-menu>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="less">
.menu {
  width: 200px;
  height: 100%;
  background-color: var(--color-bg-1);
  border-right: 1px solid var(--color-border);
}
.content {
  width: calc(100% - 200px);
  height: 100%;
  padding: 20px;
  background-color: var(--color-bg-1);
}
</style>
