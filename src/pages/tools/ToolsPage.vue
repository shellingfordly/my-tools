<script lang="ts" setup>
import { ToolsRoute } from "/@/router/modules/tools";

const menus = ToolsRoute.children?.map((r) => ({
  name: r.meta?.name,
  path: r.path,
}));
const route = useRoute();
const router = useRouter();
const selectedKey = ref(route.path);

function onClick(path: string) {
  selectedKey.value = path;
  router.push(path);
}
</script>

<template>
  <a-layout style="height: 100%">
    <a-layout-sider style="height: 100%">
      <a-menu class="menu" :selectedKeys="[selectedKey]">
        <a-menu-item
          @click="onClick(menu.path)"
          :key="menu.path"
          v-for="menu in menus"
        >
          {{ menu.name }}
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout-content style="height: 100%">
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="less"></style>
