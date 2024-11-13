<script lang="ts" setup>
import { routes } from "/@/router/modules";
import { IconMoonFill, IconSunFill } from "@arco-design/web-vue/es/icon";

const menus = computed(() => {
  return routes.map((r) => ({
    name: r.meta?.name,
    path: r.path,
  }));
});
const route = useRoute();
const router = useRouter();
const selectedKey = computed(() => {
  return routes.find((m) => route.path.includes(m.path))?.path || "";
});
const { isDark } = useTheme();

function onClick(path: string) {
  router.push(path);
}
</script>

<template>
  <a-layout-header class="header">
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
    <div f-ac>
      <a-button type="text" mr-10 @click="isDark = !isDark">
        <icon-sun-fill v-if="isDark" />
        <icon-moon-fill v-else />
      </a-button>
    </div>
  </a-layout-header>
</template>

<style scoped lang="less">
.logo {
  height: 32px;
  margin: 12px 8px;
  background: rgba(255, 255, 255, 0.2);
}

.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-2);
}
</style>
