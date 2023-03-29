<script lang="ts" setup>
import { routes } from "/@/router/modules";

const collapsed = ref(false);
const onCollapse = (val: boolean) => (collapsed.value = val);

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
  <a-layout-sider
    breakpoint="lg"
    :width="220"
    collapsible
    :collapsed="collapsed"
    @collapse="onCollapse"
  >
    <a-menu hp-100i :selectedKeys="[selectedKey]">
      <a-menu-item
        @click="onClick(menu.path)"
        :key="menu.path"
        v-for="menu in menus"
      >
        {{ menu.name }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<style scoped>
:deep(.arco-layout-sider) .logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}
:deep(.arco-layout-sider-light) .logo {
  background: var(--color-fill-2);
}
</style>
