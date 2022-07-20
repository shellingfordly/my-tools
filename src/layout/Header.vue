<script lang="ts" setup>
import { routes } from "/@/router/modules";
import FontFamily from "../components/font-family/FontFamily.vue";
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
const { isDark } = useDark();

function onClick(path: string) {
  router.push(path);
}
</script>

<template>
  <a-layout-header class="header">
    <div style="width: 300px"></div>
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
      <FontFamily />
    </div>
  </a-layout-header>
</template>

<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border);
  background-color: var(--color-bg-2);
}
</style>
