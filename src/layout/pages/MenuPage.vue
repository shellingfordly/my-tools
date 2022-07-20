<script lang="ts" setup>
import { HomeRoute } from "/@/router/modules";

const route = useRoute();
const routeItem = HomeRoute.children.find((item) =>
  route.path.includes(item.path)
);
const menus = routeItem
  ? routeItem.children?.map((r) => ({
      name: r.meta?.name,
      path: r.path,
    }))
  : [];
const router = useRouter();
const selectedKey = ref(route.path);

function onClick(path: string) {
  selectedKey.value = path;
  router.push(path);
}
</script>

<template>
  <a-layout>
    <a-layout-sider>
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
    <a-layout-content p-20>
      <RouterView />
    </a-layout-content>
  </a-layout>
</template>

<style scoped lang="less"></style>
